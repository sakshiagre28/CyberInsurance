import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlan } from 'src/models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http : HttpClient) { }

  getAllPlans(): Observable<IPlan[]>{
    return this.http.get<IPlan[]>('http://localhost:2211/getAllPlans')
  }
}
