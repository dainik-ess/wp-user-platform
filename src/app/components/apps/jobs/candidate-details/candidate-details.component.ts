import { Component } from '@angular/core';
import { Image } from '@ks89/angular-modal-gallery';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { SwiperModule } from 'swiper/angular';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  Swiper,
} from 'swiper';
import { SharedModule } from '../../../../shared/shared.module';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Mousewheel,
  Zoom,
  Autoplay,
  Thumbs,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [SharedModule,CarouselModule,SwiperModule,NgbTooltipModule],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.scss'
})
export class CandidateDetailsComponent {
thumbsSwiper: any;

setThumbsSwiper(swiper: any) {
  this.thumbsSwiper = swiper;
}

swiperOptions = {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  // other options...
};
ngAfterViewInit() {
  this.initSwipers();
}

private initSwipers(): void {
    const galleryThumbs = new Swiper('.swiper-view', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const galleryview = new Swiper('.swiper-preview', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }


slidesStore: any[]=[
  {
    src:'./assets/images/faces/1.jpg',
    name:'Brenda Simpson',
    developer:'Software Developer',
    location:'Kondapur Hyderabad',
    rating:'56',
    Graduate:'Graduate',
    Shift:'Flexible-Shifts',
    joining:'immediate Joiner',
    Languages:'Good at English',
    skill1:'Html',
    skill2:'CSS',
    skill3:'Javascript',
    skill4:'Angular',
    Bond:'1 Year Bond Accepted',
    EXp:'2 Years',
  },
  {
    src:'./assets/images/faces/3.jpg',
    name:'Dweyne Stort',
    developer:'Web Developer',
    location:'Gachibowli Hyderabad',
    rating:'142',
    Graduate:'Graduate',
    Shift:'Flexible-Shifts',
    joining:'With in 10days',
    Languages:'Good at English',
    skill1:'React',
    skill2:'javascript',
    skill3:'Raect Native',
    Bond:'1 Year Bond Accepted',
    EXp:'2 Years',
  },
  {
    src:'./assets/images/faces/21.jpg',
    name:'Jasmine Kova',
    developer:'python Developer',
    location:'Gachibowli Chennai',
    rating:'56',
    Graduate:'MBA',
    Shift:'Day-Shifts',
    joining:'With in 30days',
    Languages:'Avg at English',
    skill1:'Python',
    skill2:'Java',
    skill3:'React',
    EXp:'5 Years',
  }
]
constructor() {}

}
