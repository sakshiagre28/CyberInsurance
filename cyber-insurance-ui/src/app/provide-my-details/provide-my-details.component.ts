import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { send } from 'process';
import { IUser } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-provide-my-details',
  templateUrl: './provide-my-details.component.html',
  styleUrls: ['./provide-my-details.component.css']
})
export class ProvideMyDetailsComponent implements OnInit {
  @Output() goForward = new EventEmitter()
  constructor(private userService : UserService) { }
  minStartDate =new Date();
  minEndDate = new Date(this.minStartDate.getFullYear() +1,this.minStartDate.getMonth(),this.minStartDate.getDate())
  currentUser :IUser;
  detailsForm : FormGroup
  additionalDetailsForm : FormGroup
  firstName :string = localStorage.getItem("firstName")

  ngOnInit(): void {
      
    this.detailsForm = new FormGroup({
    salutation : new FormControl('',Validators.required),
    firstName:new FormControl(this.userService.currentUser.firstName,Validators.required),
    lastName:new FormControl('',Validators.required),
    birthDate:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    sendQuoteAt:new FormControl('',Validators.required),
    aadhar:new FormControl('',Validators.required),
    income:new FormControl('',Validators.required),
    })

    this.additionalDetailsForm = new FormGroup({
      policyStartDate: new FormControl('',Validators.required),
      policyEndDate: new FormControl('',Validators.required),
    })
  }

  goForwardClick(){
    this.goForward.emit(true);
}

saveDetails(){
    if(this.detailsForm.valid){
    console.log(this.detailsForm.value)}
    this.userService.saveUserDetails(this.detailsForm.value)
}
saveAdditionalDetails(){
    if(this.additionalDetailsForm.valid){
      console.log(this.additionalDetailsForm.value)
      this.userService.saveAdditionalDetails(this.additionalDetailsForm.value)
    }
}
}
