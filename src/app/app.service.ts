import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}employee/${id}/profile`)
  }
  // getUserById(id: number): Observable<User>{
  //   return this.http.get<User>(`${this.url}user/${id}`)
  // }
}
