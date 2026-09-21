//const nome = localStorage.getItem('nome');

//alert(nome);

///localStorage.setItem("nome", "Frederico");

//alert(localStorage.getItem("nome"));

//localStorage.removeItem("nome");

function login(){

    const campo_usuario = localStorage.getItem("Usuario");
    const campo_senha = localStorage.getItem("Senha");

    const local_usuario = document.getElementById("Usuario");
    const local_senha = document.getElementById("Senha");

    if(campo_usuario == local_usuario){
        alert("Login realizado com sucesso! 👍")
    }else{
        alert("Usuário inválido! 👎")
    }
   
}