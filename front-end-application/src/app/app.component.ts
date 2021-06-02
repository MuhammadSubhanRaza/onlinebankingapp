import { Component } from '@angular/core';
import {Event,Router,NavigationStart,NavigationEnd} from '@angular/router'
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-application';

  spinnerStatus = true;

  constructor(private router:Router){
     if(!localStorage.getItem("jwt"))
     {
       this.router.navigate(["welcome"])
       this.spinnerStatus = false
     }
  }

  ngOnInit()
  {
    this.router.events.subscribe((routerEvent:Event)=>{
        if(routerEvent instanceof NavigationStart)
        {
           of(this.title).pipe(delay(500)).subscribe(data=>{
            this.spinnerStatus = false;
          })
        }
        if(routerEvent instanceof NavigationEnd)
        {
          this.spinnerStatus= true;
        }
      })
  }
  

}
