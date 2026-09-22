function login() {
    // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const campo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;

    // 2º carregar os valores do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
    if (campo_usuario == local_usuario && campo_senha == local_senha) {
        alert("Login realizado com sucesso! 👍");
    } else {
        alert("Usuário ou senha inválidos! 👎");
    }

}
function cadastro() {

    const campo_nome = document.getElementById("nome").value;
    const campo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;
    const campo_palavrapasse = document.getElementById("palavrapasse").value;

    localStorage.setItem("nome", campo_nome);
    localStorage.setItem("usuario", campo_usuario);
    localStorage.setItem("senha", campo_senha);
    localStorage.setItem("palavrapasse", campo_palavrapasse);

    window.location.href = "login.html";

        // 2º Cadastrar os dados no localStorage
        // Ex.: localStorage.setItem("NOME", valor)
        // OBS.: "valor" é o dado que foi carregado no passo 1


        // 3º Redirecionar para a tela de login
}


function recuperar_senha() {

    const campo_nome = document.getElementById("nome").value;
    const campo_palavrapasse = document.getElementById("palavrapasse").value;

    const local_nome = document.localStorage("nome");
    const local_palavra_passe = document.getElementById("palavra_passe");

    if (campo_nome == local_nome && campo_palavrapasse == local_palavrapasse){
        alert("Sua senha é: " + localStorage.getItem("senha"));
    }else{
        alert("Dados incorreto!");
        document.getElementById("nome").value = "";
        document.getElementById("palavra_passe").value = "";
    }
    // 1º Carregar os valores dos campos NOME e PALAVRA-PASSE


// 2º Buscar no localStorage os valores de NOME e PALAVRA-PASSE


// 3º Comparar se os valores carregados nos campos da tela
// são compatíveis com os valores armazenados no localStorage.
//
// Se forem iguais, exibir a senha na tela ou em um alert.
//
// Se forem diferentes, notificar o usuário na tela ou em um alert
// informando que os dados não são compatíveis.
// Além disso, limpar os campos de entrada (inputs).


// DESAFIO SEM I.AAAAA:
//
// Vocês devem implementar um controle de tentativas para a recuperação de senha.
//
// REGRAS:
// Vocês devem validar a quantidade de tentativas incorretas
// de NOME e PALAVRA-PASSE.
//
// Quando o usuário errar 3 vezes, vocês devem bloquear os campos (inputs)
// e impedir que o usuário realize uma nova tentativa de recuperação de senha.
//
// Lembrem-se de salvar a quantidade de erros no localStorage.

}