import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild('slider', { static: true })
  slider!: ElementRef;
  @ViewChild('slides', { static: true })
  slides!: ElementRef;
  @ViewChild('prev', { static: true })
  prev!: ElementRef;
  @ViewChild('next', { static: true })
  next!: ElementRef;


  @ViewChild('section1')
  section1!: ElementRef;
  @ViewChild('section2')
  section2!: ElementRef;

  private intersectionObserver!: IntersectionObserver;

  constructor(
    private router: Router
  ){ }

  slideIndex = 1;
  isDragging = false;
  
  @ViewChild('targetElement')
  targetElement!: ElementRef;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i: number;
    const slides = this.slides.nativeElement.children;
    const prev = this.prev.nativeElement;
    const next = this.next.nativeElement;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slides[this.slideIndex - 1].classList.add('active');
    if (this.slideIndex === 1) {
      prev.style.display = 'none';
    } else {
      prev.style.display = 'block';
    }
    if (this.slideIndex === slides.length) {
      next.style.display = 'none';
    } else {
      next.style.display = 'block';
    }
  }

  createRipple(data:any){
    this.router.navigate(['/details'])
  }


  // handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //   entries.forEach((entry) => {
  //     console.log(entries)
  //     if (entry.isIntersecting) {
  //       console.log('in view')
  //       this.renderer.addClass(entry.target, 'slide-in-up');
  //     } else {
  //       //console.log('out of view')
  //       // this.renderer.removeClass(entry.target, 'slide-in-up');
  //     }
  //   });
  // };



}
