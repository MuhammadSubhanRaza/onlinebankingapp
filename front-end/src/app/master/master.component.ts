import { Component, OnInit } from '@angular/core';
import {Event,Router,NavigationStart,NavigationEnd} from '@angular/router'
import {of,} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

    title = 'front-end';

  spinnerStatus = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
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
