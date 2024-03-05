//console.log("Hello World!", 1, 2, 3, true, ['apple', 'banana', 'orange']);
//console.error("Hello World");
//console.warn("Hello World");
//console.table(['apple', 'banana', 'grape']);

//let name = true
//console.log(typeof(name))

let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")

btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function register (username, password, confirmPassword) {
    // if... else if .... else
    // Conditional Operators (Greater than >, Less than <, Equal ==, Not !, or ||)
    // Greater Than or Equal >=, Less Than or Equal <=
    // Not Equal !=

    console.log(username, password, confirmPassword)

    if(password == confirmPassword && password != "" && confirmPassword != "") {
        return console.log("Password match!")
    } else if (password == "" || confirmPassword == ""){
        return console.log("Password must not be empty")
    }else {
        return console.log("Password does not match!")
    }
    console.log(username, password, confirmPassword)
}