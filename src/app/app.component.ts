import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Portal';
  constructor(private router:Router){}
  goToPage(page:String):void{
    
    this.router.navigate([`${page}`])
  }
}
