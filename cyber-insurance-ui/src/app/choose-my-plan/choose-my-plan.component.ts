import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-my-plan',
  templateUrl: './choose-my-plan.component.html',
  styleUrls: ['./choose-my-plan.component.css']
})
export class ChooseMyPlanComponent implements OnInit {

  constructor() { }
  plans : Array<string> = ['Plan1','Plan2','Plan3','Plan4','plan5'] //temporary
  isClicked :boolean = false;
  isMalwareSelected : boolean = false;
  ngOnInit(): void {
  }

  onMalwareClick(){
    this.isMalwareSelected = !this.isMalwareSelected;
    console.log(this.isMalwareSelected)
  }
}
