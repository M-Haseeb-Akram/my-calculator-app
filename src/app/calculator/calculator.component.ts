import { BUTTONS } from './button-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  host: {
    '(document:keydown)': 'keys_action($event)'
  }
})
export class CalculatorComponent implements OnInit {
  buttons= BUTTONS;
  input: string = "";
  output: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  setInput = (value:string): void => {
    this.input += value; 
  }

  clear = (): void => {
    this.input = "";
    this.output = "";
  }

  calculate = (): void => {
    try{
      let result = eval(this.input)
      if(result != undefined){
          this.output = result;
      }   
    }
    catch(err){
      this.output = "Invalid";   
    }
  }

  actions = (value:string) : void => {
    if(value === 'C'){
      this.clear();
    }
    else if(value === '='){
      this.calculate();
    }
    else{
      this.setInput(value);
    }
  }

  keys_action = (event: KeyboardEvent) => {
    const name = event.key;
    const keyCode = event.keyCode || event.which;
    if((keyCode >=48 && keyCode <=57) || name === '*' || name === '+' || name === '-' || name === '/' || name === '(' || name === ')'){
        this.input += name;
    } 
    else if (name === 'Backspace' || name === 'Delete'){
        this.input = this.input.substring(0,this.input.length-1);
    }
    else if(name === 'Enter'){
        this.calculate();
    }
  }
}
