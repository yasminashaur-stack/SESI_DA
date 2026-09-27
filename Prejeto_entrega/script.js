
const materias = ["Português", "Matemática", "Ciências"];


let alunos = [
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
        notas: { "Português": [9.0, 8.8, 10], "Matemática": [7.0, 8.0, 9.0], "Ciências": [8, 7, 9] }
    },
    {
        nome: "Diego Alves",
        faltas: 0,
        notas: { "Português": [6, 7, 6], "Matemática": [8, 9, 9], "Ciências": [6, 6, 7] }
    },
    {
        nome: "Elisa Ferreira",
        faltas: 2,
        notas: { "Português": [10, 9, 10], "Matemática": [9, 9, 10], "Ciências": [10, 10, 9] }
    },
    {
        nome: "Felipe Costa",
        faltas: 7,
        notas: { "Português": [5, 6, 5], "Matemática": [4, 5, 6], "Ciências": [5, 6, 5] }
    }
];


const btnEntrar = document.querySelector(".caixa-login button");
const telaLogin = document.querySelector(".caixa-login");
const telaLista = document.getElementById("tela-lista");

btnEntrar.addEventListener("click", function () {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "diretor" && senha === "1234") {
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
            alunos.splice(indice, 1);
            renderizarLista();
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
            <td>${notasMateria[2]}</td>
        `;
        tbodyDetalhe.appendChild(linha);
    });

    telaLista.style.display = "none";
    telaDetalhe.style.display = "block";
}

document.getElementById("btn-voltar").addEventListener("click", function () {
    telaDetalhe.style.display = "none";
    telaLista.style.display = "block";
});