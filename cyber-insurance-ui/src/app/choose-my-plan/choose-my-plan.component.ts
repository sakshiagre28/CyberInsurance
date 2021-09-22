import { Component, OnInit } from '@angular/core';
import { IPlan } from 'src/models/plan';
import { PassDataService } from 'src/services/pass-data.service';
import { PlanService } from 'src/services/plan.service';
import { UserService } from 'src/services/user.service';
import * as inclusions from '../../assets/staticData/inclusions.json'
@Component({
  selector: 'app-choose-my-plan',
  templateUrl: './choose-my-plan.component.html',
  styleUrls: ['./choose-my-plan.component.css']
})
export class ChooseMyPlanComponent implements OnInit {

  constructor(private planService : PlanService,private userService: UserService,private passDataService: PassDataService) { }
  plans : IPlan[] = [] //temporary
  isClicked :boolean = false;
  isMalwareSelected : boolean = false;
  planClicked :any;
  inclusionList :any
  exclusionList : any
  ngOnInit(): void {
    this.planService.getAllPlans().subscribe(data =>{
      this.plans = data;
      this.planClicked = Array.from({length: this.plans.length}).fill('Select');  
    })
    this.planService.getInclusions().subscribe(data=>{
      this.inclusionList =data
    })

    this.planService.getExclusions().subscribe(data=>{
      this.exclusionList = data
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
    
    
        this.userService.savePlan(planId);
        this.passDataService.updateData(planId)
  }

  onMalwareClick(){
    this.isMalwareSelected = !this.isMalwareSelected;
    this.userService.saveMalwareFlag(this.isMalwareSelected)
    this.passDataService.passMalwareData(this.isMalwareSelected)
  }
}
