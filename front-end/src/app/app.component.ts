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
  title = 'front-end';

  spinnerStatus = true;

  
  constructor(private router:Router){
     
  }

  ngOnInit(){
     this.router.events.subscribe((routerEvent:Event)=>{
          console.log(routerEvent)
        if(routerEvent instanceof NavigationStart)
        {
           of(this.title).pipe(delay(500)).subscribe(data=>{
            this.spinnerStatus = false;
          })
        }
        if(routerEvent instanceof NavigationEnd)
        {
          this.spinnerStatus= true;
          console.log("called from end")
        }
      })
  }

  sideNav = false;



}
