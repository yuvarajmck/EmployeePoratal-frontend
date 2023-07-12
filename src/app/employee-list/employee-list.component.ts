import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private http:HttpClient, private router:Router){}
 
  employees:any;

  ngOnInit():void {
      let response = this.http.get("http://localhost:8080/employee/list");
      response.subscribe((data)=>this.employees=data);
  }
  
  viewEmployee(id:number) {
    this.router.navigate(['employee',id]);
    }
  }

  