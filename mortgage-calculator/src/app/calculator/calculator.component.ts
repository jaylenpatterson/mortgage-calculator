
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public years: number;
  public purchasePrice: number;
  public downPayment: number;
  public interest: number;
  
  public loanAmount: number = 0;
  public perMonth: number = 0;

  constructor() {
    
  }

  ngOnInit(): void {
  }
// USE NG FORM
  public onSubmit(form: NgForm) {
    let lengthOfLoan = form.value.repaymentTime * 12;
    let percentageRate = form.value.interestRate / 1200
    this.loanAmount = form.value.purchasePrice  - form.value.downPayment;
    this.perMonth = (form.value.purchasePrice * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
  }
}
