import { Component, OnInit, Output, EventEmitter, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { send } from 'process';
import { IUser } from 'src/models/user';
import { PassDataService } from 'src/services/pass-data.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-provide-my-details',
  templateUrl: './provide-my-details.component.html',
  styleUrls: ['./provide-my-details.component.css']
})
export class ProvideMyDetailsComponent implements OnInit, OnChanges {
  @Output() goForward = new EventEmitter()
  constructor(private userService : UserService, private passDataService : PassDataService) { }
  minStartDate =new Date();
  minEndDate = new Date(this.minStartDate.getFullYear() +1,this.minStartDate.getMonth(),this.minStartDate.getDate())
  currentUser :IUser;
  @Input() detailsForm : FormGroup
  @Input() additionalDetailsForm : FormGroup
  firstName :string = localStorage.getItem("firstName")

  ngOnInit(): void {
      
    this.detailsForm = new FormGroup({
    salutation : new FormControl(this.userService.currentUser.salutation,Validators.required),
    firstName:new FormControl(this.userService.currentUser.firstName,Validators.required),
    lastName:new FormControl(this.userService.currentUser.lastName,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    birthDate:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    sendQuoteAt:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
    aadhar:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    income:new FormControl('',Validators.required),
    })

    this.additionalDetailsForm = new FormGroup({
      policyStartDate: new FormControl('',Validators.required),
      policyEndDate: new FormControl('',Validators.required),
    })
    
  }
  
  ngOnChanges(changes: SimpleChanges){/*
    this.passDataService.proceedToReviewAndPay(this.detailsForm.valid,this.additionalDetailsForm.valid)
    console.log("values passed :"+this.detailsForm.valid+this.additionalDetailsForm.valid)
    console.log(changes.detailsForm.currentValue)*/
  }
 
  
  goForwardClick(){
    this.goForward.emit(true);
}

saveDetails(){
    if(this.detailsForm.valid){
    console.log(this.detailsForm.value)
    this.userService.saveUserDetails(this.detailsForm.value)
    this.passDataService.proceedToReviewAndPay(this.detailsForm.valid,this.additionalDetailsForm.valid)
    console.log("values passed :"+this.detailsForm.valid+this.additionalDetailsForm.valid)
  }
    
    
}
saveAdditionalDetails(){
    if(this.additionalDetailsForm.valid){
      console.log(this.additionalDetailsForm.value)
      this.userService.saveAdditionalDetails(this.additionalDetailsForm.value)
      this.passDataService.proceedToReviewAndPay(this.detailsForm.valid,this.additionalDetailsForm.valid)
    console.log("values passed :"+this.detailsForm.valid+this.additionalDetailsForm.valid)
    }
    
}
}
