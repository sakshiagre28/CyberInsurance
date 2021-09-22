import { Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IChoice } from 'src/models/choice';
import { ITempArray } from 'src/models/tempArray';
import { IUser } from 'src/models/user';
import { PassDataService } from 'src/services/pass-data.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-provide-my-details',
  templateUrl: './provide-my-details.component.html',
  styleUrls: ['./provide-my-details.component.css']
})
export class ProvideMyDetailsComponent implements OnInit{
  
  constructor(private userService : UserService, private passDataService : PassDataService) { }
  minStartDate =new Date();
  minEndDate = new Date(this.minStartDate.getFullYear() +1,this.minStartDate.getMonth(),this.minStartDate.getDate())
  currentUser :IUser;
  detailsForm : FormGroup
  additionalDetailsForm : FormGroup
  securityDetailsForm : FormGroup
  firstName :string = localStorage.getItem("firstName")

  public checks: Array<IChoice> = [
    {description: 'My family\'s or my computer(s) / smart device(s) has been hacked before.', value: 'device hacked',checked : false},
    {description: "My family or I have been a victim to online-fraud / defamation.", value: 'online fraud',checked : false},
    {description: "My family or I have filed a complaint or law suit in the past due to invasion of privacy or misuse of personal Information.", value: 'invasion of privacy',checked : false},
    {description: "None of the above applies to me or my family", value:"none",checked : false}
  ];
   array :Array<ITempArray> =[
    
   ]
  
  
  ngOnInit(): void {
      
    this.detailsForm = new FormGroup({
    salutation : new FormControl(this.userService.currentUser.salutation,Validators.required),
    firstName:new FormControl(this.userService.currentUser.firstName,Validators.required),
    lastName:new FormControl(this.userService.currentUser.lastName,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    birthDate:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')]),
    sendQuoteAt:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
    aadhar:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    income:new FormControl('',Validators.required),
    })

    this.additionalDetailsForm = new FormGroup({
      policyStartDate: new FormControl('',Validators.required),
      policyEndDate: new FormControl('',Validators.required),
    })
    
    this.securityDetailsForm = new FormGroup({
      myChoices : new FormArray([])
    })
    
  }

saveDetails(){
    if(this.detailsForm.valid){
    this.userService.saveUserDetails(this.detailsForm.value)
    this.passDataService.proceedToReviewAndPay(this.detailsForm.valid,this.additionalDetailsForm.valid)
  }
    
    
}
saveAdditionalDetails(){
    if(this.additionalDetailsForm.valid){
      this.userService.saveAdditionalDetails(this.additionalDetailsForm.value)
      this.passDataService.proceedToReviewAndPay(this.detailsForm.valid,this.additionalDetailsForm.valid)
   
    }
    
   
}
onCheckChange(event,i){

    var bool1 =false
    var bool2 = false
    this.array.forEach(element => {
      if(element.index == i){
        bool1 = true
        if(element.arrayValue == event.checked){
          bool2 = true
        }
      }
    });
    if(bool1 == false && bool2==false){
      this.array.push({index : i,arrayValue :event.checked})
    }
    else if(bool2 == false){
      this.array.forEach(element => {
        if(element.index == i){
          element.arrayValue = event.checked
        }
      });
    }
    else{}
}
saveSecurityDetails(){
      this.userService.saveSecurityDetails(this.array)
}
}
