import { Component, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  isFixed = false;
  cardList = [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
    { title: 'Card 3', description: 'Description for card 3' },
    { title: 'Card 4', description: 'Description for card 4' },
    { title: 'Card 5', description: 'Description for card 5' },
    { title: 'Card 6', description: 'Description for card 6' },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  @HostListener('window:scroll')
  checkScroll() {
    const section1Height = this.elementRef.nativeElement.querySelector('.section1').offsetHeight;
    const section2HeaderHeight = this.elementRef.nativeElement.querySelector('.section2 .header').offsetHeight;
    const section2Top = this.elementRef.nativeElement.querySelector('.section2').offsetTop;
  
    if (window.pageYOffset >= section2Top - section2HeaderHeight && window.pageYOffset <= section2Top + section1Height) {
      this.isFixed = true;
      this.elementRef.nativeElement.querySelector('.section2').style.top = `${section2HeaderHeight}px`;
    } else {
      this.isFixed = false;
      this.elementRef.nativeElement.querySelector('.section2').style.top = '-50px';
    }
  }
  
  
}
