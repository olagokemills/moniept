import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
      <router-outlet>
      
      </router-outlet>
    <app-footer></app-footer> 
    `,
  styleUrls:[]
})
export class PagesComponent {

  clickEvent: MouseEvent | undefined;

  onClicked(event: MouseEvent) {
    this.clickEvent = event;
  }

  // @ViewChild('header1') header1: any;
  // @ViewChild('header2') header2: any;

  // private headerOne!: any;
  // private headerTwo!: any;

  ngOnInit() {
    // this.headerOne = document.querySelector('.header-one');
    // this.headerTwo = document.querySelector('.header-two');
    // console.log(this.headerTwo)
    // setTimeout(() => {
    //   console.log(this.headerTwo)
    // }, 1200);
  }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const scrollPosition = window.pageYOffset;
  //   const headerOneHeight = this.headerOne.offsetHeight;
  //   const headerTwoHeight = this.headerTwo.offsetHeight;

  //   if (scrollPosition >= headerOneHeight) {
  //     this.headerTwo.classList.add('fixed');
  //     this.headerOne.classList.add('sticky');
  //   } else {
  //     this.headerTwo.classList.remove('fixed');
  //     this.headerOne.classList.remove('sticky');
  //   }
  // }
}
