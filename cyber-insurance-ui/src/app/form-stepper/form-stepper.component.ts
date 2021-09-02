import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goForwardClick(stepper : MatStepper){
    
      stepper.next();
  }
}
