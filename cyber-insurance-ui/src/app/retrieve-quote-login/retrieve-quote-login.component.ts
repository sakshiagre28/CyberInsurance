import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser } from 'src/models/user';
import { PassDataService } from 'src/services/pass-data.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-retrieve-quote-login',
  templateUrl: './retrieve-quote-login.component.html',
  styleUrls: ['./retrieve-quote-login.component.css']
})
export class RetrieveQuoteLoginComponent implements OnInit {

  constructor(private router : Router,private userService: UserService, private snackBar : MatSnackBar, private http: HttpClient,private passDataService : PassDataService) { }
  loggedInUser : IUser
  retrieveQuoteForm= new FormGroup({
    quoteRefId : new FormControl('',[Validators.required, Validators.maxLength(4)]),
    mobile : new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  onRetrieveClick(){
    this.userService.retrieveQuoteLogin(this.retrieveQuoteForm.controls['quoteRefId'].value,this.retrieveQuoteForm.controls['mobile'].value).subscribe(data=>{
      this.loggedInUser = data
      this.passDataService.passLoggedInUser(data)
    })

    //this.userService.setLoggedInUser(this.loggedInUser)
    this.router.navigate(['/retrieveQuote'])
  }
}
