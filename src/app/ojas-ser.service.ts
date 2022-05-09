import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OjasSerService {
 
  Employee="http://localhost:3000/EmployeeData";
  EventData="http://localhost:3000/EventData";

  constructor(private http:HttpClient) { }

  private subject = new BehaviorSubject<any>('Hello');
 
  getEmployee(){
    return this.http.get(this.Employee)
  }
  getObject(){
    return this.subject.asObservable()
   }
  sendObject(data:any){
    return this.subject.next({text:data})
   }

  

}
