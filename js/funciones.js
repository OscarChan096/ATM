let flagBtn;
const EXPIRATION_TIME = 500000;
const userAccounts = [
    {
        name: "Oscar Chan",
        user: "oscar",
        cash: 55000,
        password: "12345",
        expiration: "No"
    },
    {
        name: "Alejandro Castillo",
        user: "alex",
        cash: 10000,
        password: "23456",
        expiration: "No"
    },
    {
        name: "Maria Jose",
        user: "majo",
        cash: 100000,
        password: "34567",
        expiration: "No"
    }
];

function ingresar() {
    let user = document.getElementById("input-user").value;
    let password = document.getElementById("input-password").value;
    console.log(`Usuario: ${user} Password: ${password}`);
    validUser(user,password);
}

function validUser(user,password) {
    let users = Object.keys(userAccounts);

    for (let i = 0; i < users.length; i++) {
        let userObject = users[i];
        if(userAccounts[userObject].user == user && userAccounts[userObject].password == password)
            window.location.replace("cuenta.html");
        //console.log(userAccounts[userObject]);
    }
}

function consultarSaldo(){
    let users = Object.keys(userAccounts);

    for (let i = 0; i < users.length; i++) {
        let userObject = users[i];
        let saldo = document.createElement("p");
        
        //console.log(userAccounts[userObject]);
    }
}



