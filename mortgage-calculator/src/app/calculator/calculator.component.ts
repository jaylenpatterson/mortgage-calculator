
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public time: number;
  public purchasePrice: number;
  public downPayment: number;
  public interest: number;

  public loanAmount: number = 0;
  public estimatedPerMonth: number = 0;

  constructor() {
    
  }

  ngOnInit(): void {
  }

  public onSubmit(form: NgForm) {
    console.log(this.time)
    console.log(this.purchasePrice)
    console.log(this.downPayment)
    console.log(this.interest)
  }

}
