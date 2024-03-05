//console.log("Hello World!", 1, 2, 3, true, ['apple', 'banana', 'orange']);
//console.error("Hello World");
//console.warn("Hello World");
//console.table(['apple', 'banana', 'grape']);

//let name = true
//console.log(typeof(name))

let txtUsername = document.querySelector("#txtUsername")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
    register(txtUsername.value)
}

function register (username) {
    console.log(username)
}