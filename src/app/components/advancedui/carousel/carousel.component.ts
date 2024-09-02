import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCollapseModule, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ NgbCollapseModule, NgbModule,SharedModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  showArrow = false;
  showIndicator = false;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

  showArrows() {
    this.showArrow = !this.showArrow;
  }
  showIndicators() {
    this.showIndicator = !this.showIndicator;
  }

  public carouselImages = [
    { img: './assets/img/photos/1.jpg', slide: '1' },
    { img: './assets/img/photos/2.jpg', slide: '2' },
    { img: './assets/img/photos/3.jpg', slide: '3' },
    { img: './assets/img/photos/4.jpg', slide: '4' },
    { img: './assets/img/photos/5.jpg', slide: '5' },
    { img: './assets/img/photos/6.jpg', slide: '6' },
    { img: './assets/img/photos/7.jpg', slide: '7' },
    { img: './assets/img/photos/8.jpg', slide: '8' },
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
 
  images = [
    './assets/images/media/media-28.jpg',
    './assets/images/media/media-31.jpg',
    './assets/images/media/media-32.jpg',
  ];
  images1 = [
    './assets/images/media/media-13.jpg',
    './assets/images/media/media-14.jpg',
    './assets/images/media/media-18.jpg',
  ];
  images2 = [
    './assets/images/media/media-44.jpg',
    './assets/images/media/media-43.jpg',
    './assets/images/media/media-45.jpg',
  ];
  darkimg = [
    './assets/images/media/media-63.jpg',
    './assets/images/media/media-62.jpg',
    './assets/images/media/media-64.jpg',
  ];
  
}
