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
  ngOnInit(): void {
    this.dataService.proceedToGetPolicyValue.subscribe(data=>{
      this.proceedToGetPolicy = data;
      console.log("rap "+this.proceedToGetPolicy)
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

  }
  goToStepper4(stepper : MatStepper){
    stepper.next()
  }   
}
