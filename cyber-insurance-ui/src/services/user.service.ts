import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlan } from 'src/models/plan';
import { IUser } from 'src/models/user';
import pdfmake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

const AUTH_API = 'http://localhost:2211/'
 const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
};



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
  }
 
  currentUser : IUser = {
    salutation: "",firstName:localStorage.getItem('firstName'),lastName:"",birthDate:"",
    email:"",sendQuoteAt:"",aadhar:"",
    income:"",policyEndDate:"",policyStartDate:"",zipcode:localStorage.getItem('zipcode'),
    plan :0,isMalwareSelected:JSON.parse(localStorage.getItem("isMalwareSelected")),
    quotationNumber : 0
  };
  loggedInUser : IUser = {
    salutation: "",firstName:"",lastName:"",birthDate:"",
    email:"",sendQuoteAt:"",aadhar:"",
    income:"",policyEndDate:"",policyStartDate:"",zipcode:"",
    plan :0,isMalwareSelected: false,
    quotationNumber : 0
  };
  currentPlan :number
  finalUser: IUser = null
  saveUserDetails(userDetails :any){
     this.currentUser.salutation = userDetails.salutation;
     //localStorage.setItem('salutation',userDetails.salutation)
     this.currentUser.lastName = userDetails.lastName;
     //localStorage.setItem('lastName',userDetails.lastName)
     this.currentUser.birthDate=userDetails.birthDate;
     //localStorage.setItem('birthDate',userDetails.birthDate)
     this.currentUser.email= userDetails.email;
     //localStorage.setItem('email',userDetails.email)
     this.currentUser.aadhar = userDetails.aadhar;
     //localStorage.setItem('aadhar',userDetails.aadhar)
     this.currentUser.income = userDetails.income;
     //localStorage.setItem('income',userDetails.income)
     this.currentUser.sendQuoteAt = userDetails.sendQuoteAt
     //localStorage.setItem('sendQuoteAt',userDetails.sendQuoteAt)
     

  }

  saveAdditionalDetails(addDetails: any){
    this.currentUser.policyStartDate = addDetails.policyStartDate
    //localStorage.setItem("policyStartDate",addDetails.policyStartDate)
    this.currentUser.policyEndDate = addDetails.policyEndDate
    //localStorage.setItem("policyEndDate",addDetails.policyEndDate)
    console.log(this.currentUser)
  }

  saveUserNameZipcode(firstName : string,zipcode: string){
    this.currentUser.firstName = firstName
    this.currentUser.zipcode = zipcode
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('zipcode',zipcode)
  }

  savePlan(plan : number){
    
      this.currentUser.plan = plan
      //localStorage.setItem('plan',this.currentUser.plan.toString())
    
  }
  saveMalwareFlag(malware : boolean){
    this.currentUser.isMalwareSelected = malware
    console.log(this.currentUser)
    //localStorage.setItem('isMalwareSelected',malware.toString())
  }

  confirmQuote() : Observable<any>{
    var quoteNumber  = Math.floor(Math.random()*10000)
    this.currentUser.quotationNumber = quoteNumber;
    //localStorage.setItem("quotationNumber",this.currentUser.quotationNumber.toString())
    const body = JSON.stringify(this.currentUser)
    let result = this.http.post(AUTH_API + 'createNewUser',body,HTTP_OPTIONS)
    this.http.get<IUser>(AUTH_API+"/getUser/"+this.currentUser.quotationNumber).subscribe(data=>{
    this.finalUser = data

    })
    return result
  }

  
  retrieveQuoteLogin(quoteRefId : number, mobile : string){
    
    return this.http.get<IUser>(AUTH_API+"/retrieveQuoteLogin/quoteNum/"+quoteRefId+"/mobile/"+mobile)
     
  }
  setLoggedInUser(user: IUser){
    this.loggedInUser = user
  }

}
