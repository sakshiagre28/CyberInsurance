import { Component, OnInit } from '@angular/core';

import { IPlan } from 'src/models/plan';
import { IUser } from 'src/models/user';
import { PassDataService } from 'src/services/pass-data.service';
import { PlanService } from 'src/services/plan.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-retrieve-quote-display',
  templateUrl: './retrieve-quote-display.component.html',
  styleUrls: ['./retrieve-quote-display.component.css']
})
export class RetrieveQuoteDisplayComponent implements OnInit {

  constructor(private userService :UserService,private passDataService : PassDataService,private planService: PlanService) { }
  loggedInUser : any 
  loggedInUserPlan: IPlan ={planId :101,planCost:0,sumAssured:0}
  ngOnInit(): void {
    this.passDataService.loggedInUser.subscribe(data=>{
      this.loggedInUser = data
      this.planService.getPlanById(this.loggedInUser.plan).subscribe(data1=>{
        this.loggedInUserPlan =data1
      })
    })
     

  }
  downloadQuote(){

  }

}
