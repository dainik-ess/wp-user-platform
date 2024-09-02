import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [SharedModule,CarouselModule,NgbModule,RouterModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {
  public showPassword: boolean = false;
  toggleClass = 'ri-eye-off-line';
  public showPassword1: boolean = false;
  toggleClass1 = 'ri-eye-off-line';
  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }

  public togglePassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === 'ri-eye-line') {
      this.toggleClass1 = 'ri-eye-off-line';
    } else {
      this.toggleClass1 = 'ri-eye-line';
    }
  }

  //   constructor (
  //   @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
  //   private renderer: Renderer2)
  //  {}
  // ngOnInit(): void {
  //   this.renderer.addClass(this.document.body, 'bg-white');
  //   this.renderer.addClass(this.document.body, 'dark:bg-!bodybg');
  //   this.renderer.addClass(this.document.body, 'text-defaulttextcolor');
  //   this.renderer.addClass(this.document.body, 'dark:text-defaulttextcolor/70');
  //   this.renderer.addClass(this.document.body, 'text-defaultsize');
  // }
  // ngOnDestroy(): void {
  //   this.renderer.removeClass(this.document.body, 'bg-white');
  //   this.renderer.removeClass(this.document.body, 'dark:bg-!bodybg');
  //   this.renderer.removeClass(this.document.body, 'text-defaulttextcolor');
  //   this.renderer.removeClass(this.document.body, 'dark:text-defaulttextcolor/70');
  //   this.renderer.removeClass(this.document.body, 'text-defaultsize');
  // }
  // }

  slidesStore: any[] = [
    {
      src: './assets/images/authentication/3.png',
    },
    {
      src: './assets/images/authentication/2.png',
    },
    {
      src: './assets/images/authentication/3.png',
    },
  ];

  pauseOnHover = false;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

}
