import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { PassDataService } from 'src/services/pass-data.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit {

  constructor(private userService: UserService,private snackBar: MatSnackBar,private dataService : PassDataService) { }
  proceedToGetPolicy: any
  proceedToReviewAndPay1 : any
  proceedToReviewAndPay2 : any
  proceedToReviewAndPayFinal : any
  ngOnInit(): void {
    this.dataService.proceedToGetPolicyValue.subscribe(data=>{
      this.proceedToGetPolicy = data;
      console.log("rap "+this.proceedToGetPolicy)
    })
    this.dataService.proceedToReviewAndPayValue1.subscribe(data =>{
      this.proceedToReviewAndPay1 = data; 
      console.log(this.proceedToReviewAndPay1)
      this.proceedToReviewAndPayFinal = this.proceedToReviewAndPay1 && this.proceedToReviewAndPay2
    })
    this.dataService.proceedToReviewAndPayValue2.subscribe(data =>{
      this.proceedToReviewAndPay2 = data;
      console.log(this.proceedToReviewAndPay2)
      this.proceedToReviewAndPayFinal = this.proceedToReviewAndPay1 && this.proceedToReviewAndPay2
    })
    
  }

  goToStepper1(){

  }
  goToStepper2(stepper : MatStepper){
      if(this.userService.currentUser.plan != 0){ 
        stepper.next();
      }
      else{
        this.snackBar.open('Please select a plan','OK',{
          horizontalPosition: 'end',
          verticalPosition:'top',
          duration:3000
        })
      }
  }
  goToStepper3(stepper : MatStepper){
    if(this.proceedToReviewAndPayFinal){
      stepper.next();
    }
    else{
      this.snackBar.open('Please enter your complete details to proceed','OK',{
        horizontalPosition: 'end',
        verticalPosition:'top',
        duration:3000
      })
    }

  }
  goToStepper4(stepper : MatStepper){
    this.userService.confirmQuote().subscribe(data=>{
      console.log("Updated : "+data)
    })
    stepper.next()
  }   

  goToPrevious(stepper : MatStepper){
    stepper.previous()
  }
}
