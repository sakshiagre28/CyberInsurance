import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IPlan } from 'src/models/plan';
@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  private content = new BehaviorSubject<any>({planId:0,planCost:0,sumAssured:0})
  public plan = this.content.asObservable();
  constructor(private http: HttpClient) { }
  updateData(planId){
    //this.http.get<any>('http://localhost:2211/getPlan/'+text).subscribe(data=>{
    //this.plan = data}
    if(planId!=0){
      this.http.get('http://localhost:2211/getPlan/'+planId).subscribe(data=>{
        this.content.next(data);
      })
    }
  }
  private proceedToGetPolicyBehSub = new BehaviorSubject<boolean>(false)
  public proceedToGetPolicyValue = this.proceedToGetPolicyBehSub.asObservable();
  proceedToGetPolicy(value :boolean){
    this.proceedToGetPolicyBehSub.next(value)
  }
}
