import { Component, ElementRef } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  constructor(private elementRef : ElementRef){

  }
 ngOninit(){
  // let html = this.elementRef.nativeElement.ownerDocument.documentElement;
  //  if(document.querySelector('.side-menu__icon')?.classList.contains('bx-store-alt')){
  //    html?.setAttribute('data-toggled','double-menu-close')
  //  }
 }
}
