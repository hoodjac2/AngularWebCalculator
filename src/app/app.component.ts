import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWebCalculator';
  display = '0';
  total = 0;
  operator = '';

  public calculateTotal(): void{
    const display = this.display.split('');
    let lhs = '';
    let rhs = '';
    let op = '';
    display.forEach(input => {
      if (Number(input) || Number(input) === 0){
        if(op === ''){
          lhs = lhs.concat(input);
        } else {
          rhs = rhs.concat(input);
        }
      } else {
        op = input;
      }
    });
    switch(op){
      case '+':
        this.total = Number(lhs) + Number(rhs);
        break;
      case '*':
        this.total = Number(lhs) * Number(rhs);
        break;
      case '/':
        this.total = Number(lhs) / Number(rhs);
        break;
      case '-':
        this.total = Number(lhs) - Number(rhs);
        break;
    }
    this.display = this.total.toString();
  }

  public clear(): void{
    this.display = '0';
    this.total = 0;
  }

  public opBttnClick(op: string){
    this.display = this.display.concat(op);
  }

  public numberBttnClick(number: string){
    if(this.display === '0' ){
      this.display = number;
    }else {
      this.display = this.display.concat(number);
    }
  }
}
