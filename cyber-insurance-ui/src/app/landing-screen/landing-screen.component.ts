import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
  txtZipcode :  string ="";
  txtName : string="";
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  getAQuoteClick(formValues){
    console.log(formValues.txtName)
    this.router.navigate(['/fillDetails'])
  }
}
