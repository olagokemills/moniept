import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  isHome:boolean = false;
  currentRoute!: string;

  constructor( private router: Router) {}
   
   getCurrentRoute(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if(this.currentRoute === '/details'){
          this.isHome = false;    
        }else{
          this.isHome = true;
        }
      }
    })};


  }
