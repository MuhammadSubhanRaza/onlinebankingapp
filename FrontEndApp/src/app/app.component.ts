import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndApp';

  constructor(private router : Router) { 
    if(localStorage.getItem("loginCred")==null)
    {
      this.router.navigate(['welcome'])
    }
  }
}
