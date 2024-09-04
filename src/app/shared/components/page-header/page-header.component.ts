import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  routerEvents:any[]=[]
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const pathArray = event.url.split('/').filter(e => e != '');
        this.routerEvents = pathArray.map(segment => segment.split('?')[0]);
      }
    })
  } 
}
