function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(
(user === "Admin1" && pass === "1234") ||
(user === "Admin2" && pass === "1234")
){

window.location.href = "dashboard.html";

}

else{

document.getElementById("message").innerHTML =
"Invalid username or password";

}

}
