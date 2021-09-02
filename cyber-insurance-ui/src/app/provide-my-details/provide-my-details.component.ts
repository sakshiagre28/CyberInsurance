import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-provide-my-details',
  templateUrl: './provide-my-details.component.html',
  styleUrls: ['./provide-my-details.component.css']
})
export class ProvideMyDetailsComponent implements OnInit {
  @Output() goForward = new EventEmitter()
  constructor() { }
  minStartDate =new Date();
  minEndDate = new Date(this.minStartDate.getFullYear() +1,this.minStartDate.getMonth(),this.minStartDate.getDate())
  salutation:string =""
  firstName :string ="";
  lastName : string ="";
  birthDate : string="";
  email :string ="";
  sendQuoteAt : string  ="";
  aadhar :string =""
  income : string=""
  policyStartDate:string =""
  policyEndDate:string =""
  ngOnInit(): void {
  }

  goForwardClick(){
    this.goForward.emit(true);
}
}
