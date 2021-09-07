import { Component, OnInit } from '@angular/core';
import { IPlan } from 'src/models/plan';
import { PlanService } from 'src/services/plan.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-choose-my-plan',
  templateUrl: './choose-my-plan.component.html',
  styleUrls: ['./choose-my-plan.component.css']
})
export class ChooseMyPlanComponent implements OnInit {

  constructor(private planService : PlanService,private userService: UserService) { }
  plans : IPlan[] = [] //temporary
  isClicked :boolean = false;
  isMalwareSelected : boolean = false;
  planClicked :any;
 
  ngOnInit(): void {
    this.planService.getAllPlans().subscribe(data =>{
      this.plans = data;
      this.planClicked = Array.from({length: this.plans.length}).fill('Select');  
    })
  }

  onPlanClick(planId,i){
    
    if(this.planClicked[i] == "Select"){
    this.planClicked[i] = "Selected"
    }
    else{
      this.planClicked[i] = "Select"
      planId = 0;
    }
    
    if(planId != 0){
      this.userService.savePlan(planId);
    }
  }

  onMalwareClick(){
    this.isMalwareSelected = !this.isMalwareSelected;
    this.userService.saveMalwareFlag(this.isMalwareSelected)
    
  }
}
