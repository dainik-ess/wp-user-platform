import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, TemplateRef } from '@angular/core';
import * as switcher from '../../../shared/components/switcher/switcher';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCollapseModule, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SwitcherService } from '../../../shared/services/switcher.service';
import { SwiperModule } from 'swiper/angular';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,SharedModule,CarouselModule,FormsModule,ReactiveFormsModule,NgbNavModule,RouterModule,NgbAccordionModule,SwiperModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  panels = [
    'Where can I subscribe to your newsletter?',
    'Where can in edit my address?',
    ' What are your opening hours?',
    ' Do I have the right to return an item?',
    ' General Terms & Conditions (GTC)',
    'Do I need to create an account to make an order?',
  ];
  panels1 = [
    'General Terms & Conditions (GTC)',
    ' Do I need to create an account to make an order??',
    ' Where can I subscribe to your newsletter?',
    ' Where can in edit my address?',
    ' What are your opening hours?',
    ' Do I have the right to return an item?',
  ];
  
  body: HTMLBodyElement | null;
  constructor(
    @Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,private SwitcherService:SwitcherService,
    private renderer: Renderer2,  private el: ElementRef, private offcanvasService: NgbOffcanvas
  ) {  
    this.body = document.querySelector('body');
      const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  const bodyElement = document.body;
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  this.renderer.removeClass(bodyElement, 'sidebar-mini');
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
  // this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'light');
}
 
  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'landing-body');
    switcher.localStorageBackUp();
      const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
     this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
     this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'light');
    //  this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
     this.renderer.removeAttribute(htmlElement, 'style');
     this.renderer.removeAttribute(htmlElement, 'data-width');
     this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
     this.renderer.removeAttribute(htmlElement, 'data-menu-styles');

  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'landing-body');
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
  this.renderer.removeAttribute(htmlElement, 'data-toggled');
 
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
}


scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
}

scrolled = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.scrolled = window.scrollY > 10;
  const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
  const scrollPos =
    window.scrollY ||
    this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
    document.body.scrollTop;
  sections.forEach((el: any, i: string | number) => {
    const currLink = sections[i];
    const val: any = currLink.getAttribute('value');
    const refElement: any = this.el.nativeElement.querySelector('#' + val);

    if (refElement !== null) {
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        const activeNav =
          this.el.nativeElement.querySelector('.nav-scroll.active');
        if (activeNav) {
          this.renderer.removeClass(activeNav, 'active');
        }
        this.renderer.addClass(currLink, 'active');
      } else {
        this.renderer.removeClass(currLink, 'active');
      }
    }
  });
}
expande = false;
expande1 = false;
expande2 = false;
toggleExpand(): void {
  this.expande = !this.expande;   
 if (localStorage.getItem('data-menu-styles') == 'light') {
   document
     .querySelector('html')
     ?.setAttribute('data-menu-styles', 'light');
 } else if (localStorage.getItem('data-menu-styles') == 'dark') {
   document
     .querySelector('html')
     ?.setAttribute('data-menu-styles', 'dark');
 }
}

bodyclick() {
  this.expande1 = false;
  this.expande2 = false;
  this.expande = false; 
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 100,
  autoplay: false,
  navText: ['<', '>'],
  responsive: {
    0: {
      items: 1, // 1 item visible for screen width less than 400 pixels
    },
    400: {
      items: 2, // 1 item visible for screen width 400 pixels or more
    },
    740: {
      items: 3, // 2 items visible for screen width 740 pixels or more
    },
    1000: {
      items: 3, // 2 items visible for screen width 1000 pixels or more
    },
  },
  nav: false,
};

activeSlides!: SlidesOutputData;

slidesStore: any[] = [
  {
    img:'./assets/images/faces/15.jpg',
    role:'CEO OF NORJA',
    name:'Json Taylor',
     name1:'Json Taylor',
     days:'12 days ago',
  },
  {
    img:'./assets/images/faces/4.jpg',
    role:'MANAGER CHO',
    name:'Melissa Blue',
   name1:'Melissa Blue',
   days:'7 days ago',
  },
  {
    img:'./assets/images/faces/2.jpg',
    role:'CEO OF EMPIRO',
    name:'Kiara Advain',
   name1:'Kiara Advain',
   days:'7 days ago',
  },
  {
    img:'./assets/images/faces/10.jpg',
    role:'CHIEF SECRETARY MBIO',
    name:'Jhonson Smith',
   name1:'Jhonson Smith',
   days:'16 hrs ago',
  },
  {
    img:'./assets/images/faces/12.jpg',
    role:'CEO ARMEDILLO',
    name:'Dwayne Stort',
   name1:'Dwayne Stort',
   days:'22 days ago',
  },
  {
    img:'./assets/images/faces/3.jpg',
    role:'AGGENT AMIO',
    name:'Jasmine Kova',
   name1:'Jasmine Kova',
   days:'26 days ago',
  },
  {
    img:'./assets/images/faces/16.jpg',
    role:'CEO MR BRAND',
    name:'Dolph MR',
   name1:'Dolph MR',
   days:'1 month ago',
  },
  {
    img:'./assets/images/faces/5.jpg',
    role:'CEO AIBMO',
    name:'Brenda Simpson',
   name1:'Brenda Simpson',
   days:'1 month ago',
  },
  {
    img:'./assets/images/faces/7.jpg',
    role:'CHIEF SECRETARY BHOL',
    name:'Julia Sams',
   name1:'Julia Sams',
   days:'2 month ago',
  },
];

getPassedData(data: SlidesOutputData) {
  this.activeSlides = data;
  // console.log(this.activeSlides);
}

indexNumber = 1;
toggleSidebar() {
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  const currentToggleValue = htmlElement.getAttribute('data-toggled');

  if (currentToggleValue !== 'open') {
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
  } else {
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }
}

 //Right Offcanvas..//
 openEnd(content: TemplateRef<any>) {
  this.offcanvasService.open(content, { position: 'end' });
}

public localdata = localStorage;

 // Theme color Mode
 themeChange(type: string, type1: string) {
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
  localStorage.setItem('ynexHeader', type1);
  this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
  localStorage.setItem('ynexMenu', type1);
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
  localStorage.setItem('ynexdarktheme', type1);

  // if (localStorage.getItem('ynexHeader') == 'light') {
  //   this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute(
  //     'style'
  //   );
  // }
  
  // if (localStorage.getItem('ynexdarktheme') == 'light') {
  //   this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute(
  //     'style'
  //   );
  //   localStorage.removeItem('bodyBgRGB')
  //   localStorage.removeItem('bodylightRGB')
  // }
  // this.primary(type)
  
}

 //  Directions

 DirectionsChange(type: string) {
  let body = document.querySelector('body');
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'dir', type);
  localStorage.setItem('dir', type);

  if (htmlElement?.getAttribute('dir') == 'ltr') {
    body?.classList.remove('rtl');
  } else {
    body?.classList.add('rtl');
  }

  if (localStorage.getItem('dir') == 'ltr') {
    localStorage.removeItem('dir');
  }
  if (localStorage.getItem('dir') == 'rtl') {
    this.renderer.setAttribute(htmlElement, 'dir', type);
  }
}

 //Theme Primary
 primary(type: string) {
  this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
    '--primary-rgb',
    type
  );
 
  localStorage.setItem('primaryRGB', type);
  localStorage.setItem('ynexlight-primary-color',type);
}


reset() {
  localStorage.clear();
  const html: any =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  const body: any = document.querySelector('body');
  html.style = '';
  html.setAttribute('data-theme-mode', 'light');
  html.setAttribute('data-vertical-style', 'overlay');
  html.setAttribute('dir', 'ltr');
  html.setAttribute('data-nav-layout', 'horizontal');
  html.removeAttribute('data-page-style', 'regular');
  html.removeAttribute('data-width', 'full-width');
  html.removeAttribute('data-menu-position', 'fixed');
  html.removeAttribute('data-header-position', 'fixed');
  html.setAttribute('data-header-styles', 'light');
  html.setAttribute('data-menu-styles', 'light');
  html.removeAttribute('bg-img', 'dark');
  html.removeAttribute('data-toggled', 'overlay');
  body.removeAttribute('data-theme-mode');
  // html.removeAttribute('data-nav-style');
  html.removeAttribute('data-bg-img', 'light');

  const ltrclickchecked = document.getElementById(
    'myonoffswitch54'
  ) as HTMLInputElement;
  if (ltrclickchecked) {
    ltrclickchecked.checked = true;
  }
  // switcher.checkOptions();
}

toggleSwitcher() {
  this.SwitcherService.emitChange(true);
  let html = this.elementRef.nativeElement.ownerDocument.documentElement;
  if (html?.getAttribute('data-toggled') == 'open' ) {
    document.querySelector('#responsive-overlay')?.classList.add('active');
  } else {
    document.querySelector('#responsive-overlay')?.classList.remove('active');
  }
 
}

}
