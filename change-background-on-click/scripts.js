const button = document.querySelector('button')
const body = document.querySelector('body')

let hexCode = "#";
function generateHexCode(){
    const hexUnitsArray = ['0', '1', '2', '3', '4' , '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let picked;
    for(let i = 0;i<6;i++){
        picked = Math.floor(Math.random() * 16); 
        hexCode += hexUnitsArray[picked];
    }
}

function clear(){hexCode="#"}


button.onclick = function(){
    generateHexCode();
    body.style.background = hexCode;
    clear();
}