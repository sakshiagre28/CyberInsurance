import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlan } from 'src/models/plan';
import { IUser } from 'src/models/user';

const AUTH_API = 'http://localhost:2211/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  currentUser : IUser = {
    salutation: "",firstName:localStorage.getItem('firstName'),lastName:"",birthDate:"",email:"",sendQuoteAt:"",aadhar:"",
    income:"",policyEndDate:"",policyStartDate:"",zipcode:localStorage.getItem('zipcode'),
    plan :null,isMalwareSelected:JSON.parse(localStorage.getItem("isMalwareSelected")),
    quotationNumber : 0
  };
  currentPlan :IPlan
  
  saveUserDetails(userDetails :any){
     this.currentUser.salutation = userDetails.salutation;
     this.currentUser.lastName = userDetails.lastName;
     this.currentUser.birthDate=userDetails.birthDate;
     this.currentUser.email= userDetails.email;
     this.currentUser.aadhar = userDetails.aadhar;
     this.currentUser.income = userDetails.income;
     this.currentUser.sendQuoteAt = userDetails.sendQuoteAt
     

  }

  saveAdditionalDetails(addDetails: any){
    this.currentUser.policyStartDate = addDetails.policyStartDate
    this.currentUser.policyEndDate = addDetails.policyEndDate
    console.log(this.currentUser)
  }

  saveUserNameZipcode(firstName : string,zipcode: string){
    this.currentUser.firstName = firstName
    this.currentUser.zipcode = zipcode
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('zipcode',zipcode)
  }

  savePlan(plan : number){
    this.http.get<IPlan>(AUTH_API+'getPlan/'+plan).subscribe(data=>{
      this.currentPlan = data
      this.currentUser.plan = this.currentPlan

    })
    
  }
  saveMalwareFlag(malware : boolean){
    this.currentUser.isMalwareSelected = malware
    console.log(this.currentUser)
    localStorage.setItem('isMalwareSelected',malware.toString())
  }

  confirmQuote(){
    var quoteNumber  = Math.floor(Math.random()*10000)
    this.currentUser.quotationNumber = quoteNumber
  }
}
