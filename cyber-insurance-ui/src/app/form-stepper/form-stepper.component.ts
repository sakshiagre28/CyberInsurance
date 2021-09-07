import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit {

  constructor(private userService: UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  goForwardClick(stepper : MatStepper){
      if(this.userService.currentUser.plan!= null){ 
        stepper.next();
      }
      else{
        this.snackBar.open('Please select a plan','OK',{
          horizontalPosition: 'end',
          verticalPosition:'top'
        })
      }
  }
}
