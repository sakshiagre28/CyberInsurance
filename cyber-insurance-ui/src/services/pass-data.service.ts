import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IPlan } from 'src/models/plan';
import { IUser } from 'src/models/user';
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

  private proceedToReviewAndPayBehSub1 = new BehaviorSubject<boolean>(false)
  public proceedToReviewAndPayValue1 = this.proceedToReviewAndPayBehSub1.asObservable();
  private proceedToReviewAndPayBehSub2 = new BehaviorSubject<boolean>(false)
  public proceedToReviewAndPayValue2 = this.proceedToReviewAndPayBehSub2.asObservable();
  proceedToReviewAndPay(value1 :boolean,value2 :boolean){
    this.proceedToReviewAndPayBehSub1.next(value1)
    this.proceedToReviewAndPayBehSub2.next(value2)
  }

  tempUser : IUser = {
    salutation: "",firstName:"",lastName:"",birthDate:"",
    email:"",sendQuoteAt:"",aadhar:"",
    income:"",policyEndDate:"",policyStartDate:"",zipcode:"",
    plan :101,isMalwareSelected: false,
    quotationNumber : 0
  };
  private loggedInUserBehSub = new BehaviorSubject<IUser>(this.tempUser)
  public loggedInUser = this.loggedInUserBehSub.asObservable();
  passLoggedInUser(user: IUser){
    this.loggedInUserBehSub.next(user)
  }
}
