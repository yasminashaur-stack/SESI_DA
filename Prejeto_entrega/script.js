
const materias = ["Português", "Matemática", "Ciências"];


const alunosPadrao = [
    {
        nome: "Ana Souza",
        faltas: 3,
        notas: { "Português": [8.0, 7.0, 9.5], "Matemática": [6.0, 7.5, 8.2], "Ciências": [9.5, 9.1, 8.0] }
    },
    {
        nome: "Bruno Lima",
        faltas: 1,
        notas: { "Português": [7.7, 6.7, 7.8], "Matemática": [5.5, 6.0, 6.0], "Ciências": [7.0, 8.0, 7.0] }
    },
        {
        nome: "Carla Mendes",
        faltas: 5,
        notas: { "Português": [9.0, 8.8, 10], "Matemática": [7.0, 8.0, 9.0], "Ciências": [8.2, 7.0, 9.0] }
    },
    {
        nome: "Diego Alves",
        faltas: 0,
        notas: { "Português": [6.0, 7.7, 6.0], "Matemática": [8.0, 9.9, 9.0], "Ciências": [6.0, 6.5, 7.0] }
    },
    {
        nome: "Elisa Ferreira",
        faltas: 2,
        notas: { "Português": [10, 9.9, 10], "Matemática": [9.2, 9.0, 10], "Ciências": [10, 10, 9.7] }
    },
    {
        nome: "Felipe Costa",
        faltas: 7,
        notas: { "Português": [5.0, 6.4, 5.0], "Matemática": [4.4, 5.0, 6.0], "Ciências": [5.1, 6.0, 5.7] }
    }
];

let alunos = alunosPadrao;
const salvos = localStorage.getItem("alunos");
if (salvos) {
    alunos = JSON.parse(salvos);
}
function salvar() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

if (!localStorage.getItem("usuario")) {
    localStorage.setItem("usuario", "diretor");
    localStorage.setItem("senha", "1234");
}

const btnEntrar = document.querySelector(".caixa-login button");
const telaLogin = document.querySelector(".caixa-login");
const telaLista = document.getElementById("tela-lista");



btnEntrar.addEventListener("click", function () {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCerto = localStorage.getItem("usuario");
    const senhaCerta = localStorage.getItem("senha");

    if (usuario === usuarioCerto && senha === senhaCerta) {
        telaLogin.style.display = "none";
        telaLista.style.display = "block";
        renderizarLista();
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

const telaDetalhe = document.getElementById("tela-detalhe");
const tbodyLista = document.querySelector("#tabela-lista tbody");

function renderizarLista() {
    tbodyLista.innerHTML = "";

    if (alunos.length === 0) {
    const linha = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 3;
    td.textContent = "Nenhum aluno cadastrado.";
    linha.appendChild(td);
    tbodyLista.appendChild(linha);
    return;
}

    alunos.forEach((aluno, indice) => {
        const linha = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = aluno.nome;
        tdNome.style.cursor = "pointer";
        tdNome.style.textDecoration = "underline";
        tdNome.addEventListener("click", function () {
            abrirDetalhe(indice);
        });

        const tdFaltas = document.createElement("td");
        tdFaltas.textContent = aluno.faltas;

        const tdAcao = document.createElement("td");
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.className = "btn-excluir";

        btnExcluir.addEventListener("click", function () {
            const certeza = confirm("Atenção! Tem certeza que quer excluir " + aluno.nome + "?");

        if (certeza) {
        alunos.splice(indice, 1);
         salvar();    
        renderizarLista();
        }
    });
        tdAcao.appendChild(btnExcluir);

        linha.appendChild(tdNome);
        linha.appendChild(tdFaltas);
        linha.appendChild(tdAcao);
        tbodyLista.appendChild(linha);
    });
}


function abrirDetalhe(indice) {
    const aluno = alunos[indice];
    document.getElementById("detalhe-nome").textContent = aluno.nome;

    const tbodyDetalhe = document.querySelector("#tabela-detalhe tbody");
    tbodyDetalhe.innerHTML = "";

    materias.forEach(materia => {
        const linha = document.createElement("tr");
        const notasMateria = aluno.notas[materia];

        linha.innerHTML = `
            <td>${materia}</td>
            <td>${notasMateria[0]}</td>
            <td>${notasMateria[1]}</td>
            <td>${notasMateria[2]}</td>`;
        tbodyDetalhe.appendChild(linha);
    });

    telaLista.style.display = "none";
    telaDetalhe.style.display = "block";
}

document.getElementById("btn-voltar").addEventListener("click", function () {
    telaDetalhe.style.display = "none";
    telaLista.style.display = "block";
});

document.getElementById("btn-adicionar").addEventListener("click", function () {
    const nome = prompt("Nome do aluno:");
    if (!nome) {
        return;
    }

    const faltas = parseInt(prompt("Quantas faltas ele tem?")) || 0;

    const notas = {};
    materias.forEach(function (materia) {
        notas[materia] = [];
        for (let tri = 1; tri <= 3; tri++) {
            const nota = parseFloat(prompt("Nota de " + materia + " no " + tri + "º trimestre:"));
            notas[materia].push(nota || 0);
        }
    });

    alunos.push({ nome: nome, faltas: faltas, notas: notas });
    salvar();
    renderizarLista();
});
//localStorage.clear()