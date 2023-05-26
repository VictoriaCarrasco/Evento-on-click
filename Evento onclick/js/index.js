function removerCuadro ( elemento ) {
    elemento.remove();
}

function alerta ( elemento ){
    alert ("Ninja was liked");
}

function sesion ( elemento ){
    let spancambiarLogin = elemento.querySelector (".cambiarLogin");
    spancambiarLogin.innerText = "Log Out";
}