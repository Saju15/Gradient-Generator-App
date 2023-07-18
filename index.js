let colorA = document.getElementById("color-a");
let colorB = document.getElementById("color-b");
let currentDirection = "to bottom";
let ouputCode = document.getElementById("code");

function setDirection(value, _this) {
    let direction = document.querySelectorAll(".buttons button");
    for(let i of direction) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
}

function GenerateCode() {
    ouputCode.value = `background-image: linear-gradient( ${currentDirection} , ${colorA.value}, ${colorB.value})` ;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient( ${currentDirection} , ${colorA.value}, ${colorB.value})`;
}

function copyText() {
    ouputCode.select();
    document.execCommand('copy');
    alert('Gradient Copied!');
}

GenerateCode();