let pass= document.querySelector("#pass");
let passrep = document.querySelector("#pass-check");
let passArr = [pass, passrep];
let passBox = document.querySelector("#passbox");

function passwordCheck(){
    if(pass.value==="" & passrep.value==="" ){
        passArr.forEach((e)=>{
            e.classList.add("invalid")});
        
    }
    else if(pass.value===passrep.value || passrep.value===pass.value ){
        
        passArr.forEach((e)=>{
            passBox.classList.remove("passfail");
            e.classList.remove("invalid")});
        
    }
    else {
        passArr.forEach((e)=>{
            passBox.classList.add("passfail");
            e.classList.add("invalid")});
        }
    };

pass.addEventListener("input",passwordCheck);
passArr.forEach((e)=>{addEventListener("input",passwordCheck)});

