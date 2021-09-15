import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlan } from 'src/models/plan';
const AUTH_API = "http://localhost:2211/"
@Injectable({
  providedIn: 'root'
})

export class PlanService {

  constructor(private http : HttpClient) { }
  
  getAllPlans(): Observable<IPlan[]>{
    return this.http.get<IPlan[]>(AUTH_API+'getAllPlans')
  }

  getInclusions():Observable<any>{
    return this.http.get<any>('../assets/staticData/inclusions.json')
  }
  getExclusions():Observable<any>{
    return this.http.get<any>('../assets/staticData/exclusions.json')
  }
  getPlanById(id: number){
    console.log("ID entered"+id)
    return this.http.get<IPlan>(AUTH_API+"getPlan/"+id)
  }
}
