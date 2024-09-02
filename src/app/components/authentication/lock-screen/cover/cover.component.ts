import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [SharedModule, CarouselModule, NgbModule, RouterModule],
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'bg-white');
    this.renderer.addClass(this.document.body, 'dark:bg-!bodybg');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'bg-white');
    this.renderer.removeClass(this.document.body, 'dark:bg-!bodybg');
  }

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

  public showPassword: boolean = false;
  toggleClass = 'ri-eye-off-line';

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }
}
