let key_values = (element) => {

}

const buttons = document.querySelectorAll(".calc-keys button");
const input = document.getElementById("input");
const output = document.getElementById("output");
for (const button of buttons) { 
  button.addEventListener('click', function(event) {
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

let clear = () => {
    input.innerText = "";
    output.innerText = "";
}

let equal = () => {
    try{
        let result = eval(input.innerText.trim())
        output.innerText = result;
    }
    catch(err){
        output.innerText = "Invalid";   
    }
    
}