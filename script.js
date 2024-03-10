let passbox= document.querySelector("#pass");
let passrep = document.querySelector("#pass-check");

function passwordCheck(){console.log("pass works")};

passbox.addEventListener("input",passwordCheck);
console.log("hellow it works", passbox, passrep);