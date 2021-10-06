const idText = document.getElementById("id");
const nameText = document.getElementById("name");
const pwText = document.getElementById("pw");
const checkText = document.getElementById("check");
const submitBtn = document.getElementById("submitBtn");
//추가
const emailText = document.getElementById("email");
const birthText = document.getElementById("birth");
const genderText = document.getElementById("gender");
const motiveText = document.getElementById("motive");

const regex = / /gi;

submitBtn.disabled = true;

function checkBtnEnable(event){
    const targetId = event.target.id;

    switch(targetId) {
        case 'id':
        case 'name':
            if(event.target.value.replace(regex, "") == ""){
                event.target.style.backgroundColor = "red";
            }
            else{
                event.target.style.backgroundColor = "green";
            }
            if((idText.style.backgroundColor == "green") && (nameText.style.backgroundColor == "green") && (checkText.style.backgroundColor == "green")){
                submitBtn.disabled = false;
            }
            else{
                submitBtn.disabled = true;
            }
            break;
        case 'pw':
        case 'check':
            if(checkText.value != pwText.value){
                checkText.style.backgroundColor = "red";
            }
            else{
                checkText.style.backgroundColor = "green";
            }
            if((idText.style.backgroundColor == "green") && (nameText.style.backgroundColor == "green") && (checkText.style.backgroundColor == "green")){
                submitBtn.disabled = false;
            }
            else{
                submitBtn.disabled = true;
            }
            break;
        default:
            console.log("default");
            break;
    }
}

function init() {
    idText.addEventListener("input", checkBtnEnable);
    nameText.addEventListener("input", checkBtnEnable);
    pwText.addEventListener("input", checkBtnEnable);
    checkText.addEventListener("input", checkBtnEnable);
    emailText.addEventListener("input", checkBtnEnable);
    birthText.addEventListener("input", checkBtnEnable);
    genderText.addEventListener("input", checkBtnEnable);
    Motive.addEventListener("input", checkBtnEnable);
}

init();
