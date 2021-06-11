import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  defaultClass = "captionSection"
  defaultClassRight = "modeSection"
  currentYear = (new Date()).getFullYear()
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onAdminClick()
  {
    this.router.navigate(["login"])
  }
  onCustomerClick()
  {
    this.router.navigate(["customerlogin"])
  }

  onChangeStyle()
  {
    if(this.defaultClass=='captionSectionChange')
    {
      this.defaultClass='captionSection'
      this.defaultClassRight = 'modeSection'
    }
    else
    {
      this.defaultClass = 'captionSectionChange';
      this.defaultClassRight='modeSectionChange';
    }
  }

}
