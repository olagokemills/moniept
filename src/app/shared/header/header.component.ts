import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHome:boolean = true;
  currentRoute!: string;
  constructor(
   public Helper:HelperService
  ){
    this.Helper.getCurrentRoute();
   }
  ngOnInit() {

    const header = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });

  }
}
