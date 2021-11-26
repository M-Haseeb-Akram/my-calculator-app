const buttons = document.querySelectorAll(".calc-keys button");
const input = document.getElementById("input");
const output = document.getElementById("output");
for (const button of buttons) { 
  button.addEventListener('click', event => {
    if(button.getAttribute('id') == 'clear'){
        clear();
    }
    else if(button.getAttribute('id') == 'equal'){
        equal();
    }
    else{ 
        input.innerText += button.getAttribute('value');
    }
  });
}

document.addEventListener('keydown', event => {
    const name = event.key;
    const keyCode = event.keyCode || event.which;
    if((keyCode >=48 && keyCode <=57) || name === '*' || name === '+' || name === '-' || name === '/' || name === '(' || name === ')'){
        input.innerText += name;
    } 
    else if (name === 'Backspace' || name === 'Delete'){
        input.innerText = input.innerText.substring(0,input.innerText.length-1);
    }
    else if(name === 'Enter'){
        equal();
    }
  }, false);


let clear = () => {
    input.innerText = "";
    output.innerText = "";
}

let equal = () => {
    try{
        let result = eval(input.innerText.trim())
        if(result != undefined){
            output.innerText = result;
        }   
    }
    catch(err){
        output.innerText = "Invalid";   
    }
    
}