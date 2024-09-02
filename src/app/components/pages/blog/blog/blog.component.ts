import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SharedModule,CarouselModule,CommonModule,RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  images: String[] = [
    './assets/images/media/media-70.jpg',
    './assets/images/media/media-71.jpg',
    './assets/images/media/media-72.jpg',
  ];
  opacities: number[] = [];
  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slides: this.images.length,
        loop: true,
        defaultAnimation: {
          duration: 3000,
        },
        detailsChanged: (s:any) => {
          this.opacities = s.track.details.slides.map((slide:any) => slide.portion);
        },
        // Cast the options object to 'any' to avoid TypeScript error
      });
       setInterval(() => {
         this.slider.next();
       }, 3000);
    });
  }
  
  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
