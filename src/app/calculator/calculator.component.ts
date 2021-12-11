import { CalculatorKeys } from './../models/button-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  host: {
    '(document:keydown)': 'keyBoardEvents($event)'
  }
})
export class CalculatorComponent implements OnInit {
  buttons= CalculatorKeys;
  input_value = "";
  result = "";
  operators = ['/','*','+','-'];
  constructor() { }

  ngOnInit(): void {
  }

  setInput = (value:string): void => {
    let last_word = this.input_value.slice(-1) 
    let check_value = this.operators.includes(value);
    let check_last_word = this.operators.includes(last_word);
    if (check_last_word){ 
        if(!check_value){
          this.input_value += value; 
        }    
    } 
    else{
      this.input_value += value; 
    } 
  }

  clearAll = (): void => {
    this.input_value = "";
    this.result = "";
  }

  calculateExpression = (): void => {
    try{
      let result = eval(this.input_value)
      if(result != undefined){
          this.result = result;
      }   
    }
    catch(err){
      this.result = "Invalid";   
    }
  }

  keysOperations = (value:string) : void => {
    if(value === 'C'){
      this.clearAll();
    }
    else if(value === '='){
      this.calculateExpression();
    }
    else{
      this.setInput(value);
    }
  }

  keyBoardEvents = (event: KeyboardEvent) => {
    const name = event.key;
    const keyCode = event.keyCode || event.which;
    if((keyCode >=48 && keyCode <=57) || name === '*' || name === '+' || name === '-' || name === '/'){
      this.setInput(name);    
    } 
    else if (name === 'Delete'){
        this.clearAll();
    }
    else if(name === 'Enter'){
        this.calculateExpression();
    }
  }
}
