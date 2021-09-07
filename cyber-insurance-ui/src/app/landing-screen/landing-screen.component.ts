import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
 
  
  constructor(private router : Router,private userService: UserService) { }
  getStartedForm= new FormGroup({
    zipCode : new FormControl(''),
    name : new FormControl('')
  })


  ngOnInit(): void {

  }
  getAQuoteClick(){
    //console.log(this.getStartedForm.value)
    this.userService.saveUserNameZipcode(this.getStartedForm.controls['name'].value,this.getStartedForm.controls['zipCode'].value,)
    this.router.navigate(['/fillDetails'])
  }
}
