function loadUserData(){
    let user = getSession();
    document.getElementById("user-name").innerHTML = user.name;
    document.getElementById("user-cash").innerHTML = "$ "+user.cash;
}

function deposito(){
    let dinero = document.getElementById("cash").value;
    let user = getSession();
    let suma = user.cash + parseInt(dinero);
}

loadUserData();