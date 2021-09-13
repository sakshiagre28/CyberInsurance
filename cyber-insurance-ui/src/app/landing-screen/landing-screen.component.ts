import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
 
  
  constructor(private router : Router,private userService: UserService, private snackBar : MatSnackBar) { }
  getStartedForm= new FormGroup({
    zipCode : new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(6)]),
    name : new FormControl('',Validators.required)
  })


  ngOnInit(): void {

  }
  getAQuoteClick(){
    if(this.getStartedForm.valid){
      this.userService.saveUserNameZipcode(this.getStartedForm.controls['name'].value,this.getStartedForm.controls['zipCode'].value,)
      this.router.navigate(['/fillDetails'])
    }
    else{
      this.snackBar.open('Please enter a valid zipcode and name','OK',{
        horizontalPosition: 'end',
        verticalPosition:'top',
        duration : 3000,
        
      });
    
    }
  }
}
