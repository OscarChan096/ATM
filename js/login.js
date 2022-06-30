function ingresar() {
    let user = document.getElementById("input-user").value;
    let password = document.getElementById("input-password").value;
    console.log(`Usuario: ${user} Password: ${password}`);
    let nickname = validUser(user,password);
    if(nickname){
        createSession(nickname);
        window.location.replace("cuenta.html");
    }else{
        alert("Usuario inexistente");
    }
}



