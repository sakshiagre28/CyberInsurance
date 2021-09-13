import { Component, OnInit } from '@angular/core';
import { IPlan } from 'src/models/plan';
import { UserService } from 'src/services/user.service';
import { PassDataService } from 'src/services/pass-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AgreementDialogComponent } from '../agreement-dialog/agreement-dialog.component';

@Component({
  selector: 'app-review-and-pay',
  templateUrl: './review-and-pay.component.html',
  styleUrls: ['./review-and-pay.component.css']
})
export class ReviewAndPayComponent implements OnInit {

  constructor(private userService : UserService,private passDataService : PassDataService,public dialog:MatDialog) { }
  
  selectedPlan : IPlan = null
  totalPremium : number
  tax :number 
  malware : number
  proceedToGetPolicy : boolean=false 
  ngOnInit(): void {
    this.passDataService.plan.subscribe(x => 
      {
        this.selectedPlan = x
        this.tax = 0.18 * x.planCost;
        this.totalPremium =1.18 * x.planCost

      });
    this.malware = localStorage.getItem('isMalwareSelected')=='true' ? 0.1*this.selectedPlan.planCost : 0
    console.log(this.selectedPlan)

  }

  buyNowClick(){
   /*
    this.dialog.open(Agreement);
    dialogBox.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
    let dialogBox = this.dialog.open(AgreementDialogComponent)
    dialogBox.afterClosed().subscribe(result=>{
      console.log("Dialog "+result)
      this.proceedToGetPolicy = result
      this.passDataService.proceedToGetPolicy(result)
    })
  }

}
/*
@Component({
  selector: 'agreement',
  templateUrl: './agreement.html',
})
export class Agreement {}
*/