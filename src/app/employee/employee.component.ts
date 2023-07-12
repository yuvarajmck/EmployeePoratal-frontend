import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  constructor(private http:HttpClient, private route:ActivatedRoute){}
  employee:any;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let response=this.http.get(`http://localhost:8080/employee/${id}/profile`);
    response.subscribe((data)=>this.employee=data);
  }
}
