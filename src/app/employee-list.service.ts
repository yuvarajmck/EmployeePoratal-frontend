import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {


  constructor(private http:HttpClient) { }
  getEmployeeById(id: number): Observable<EmployeeComponent>{
    return this.http.get<EmployeeComponent>(`http:localhost:8080/employee/${id}/view`)
    }
}