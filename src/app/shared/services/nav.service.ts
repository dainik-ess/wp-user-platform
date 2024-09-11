import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string,
  dirchange?: boolean,
  nochild?: any

}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  // MENUITEMS: Menu[] = [
  //   // Dashboard
  //   { headTitle: 'MAIN' },
  //   {
  //     title: 'Dashboards',
  //     icon: 'home',
  //     type: 'sub',
  //     badgeClass:'warning-transparent',
  //     badgeText:'warning',
  //     badgeValue:'12',
  //     selected : false,
  //     active: false,
  //     dirchange: false,
  //     children: [
  //       { path: '/crm', title: 'CRM', type: 'link', dirchange: false, },
  //     ],
  //   },

  //   { headTitle: 'PAGES' },
  //   {
  //     title: 'Pages',
  //     type: 'sub',
  //     active: false,
  //     selected : false,
  //     dirchange: false,
  //     icon: 'file-blank',
  //     badgeClass: 'secondary-transparent',
  //     badgeText: 'secondary',
  //     badgeValue: 'New',
  //     children: [
  //       {
  //         title: 'Blog',
  //         type: 'sub',
  //         active: false,
  //         dirchange: false,
  //         selected : false,
  //         children: [
  //           {
  //             path: '/pages/blog/blog',
  //             title: 'Blog',
  //             type: 'link',
  //              dirchange: false,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  MENUITEMS: Menu[] = [
    {
      title: 'Products',
      icon: 'box',
      type: 'sub',
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/pages/ecommerce/addproduct',
          title: 'Add Products',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/ecommerce/products',
          title: 'Products',
          type: 'link',
          dirchange: false,
        }
      ],
    },
    {
      title: 'Connect Whatsapp',
      icon: 'bx bx-whatsapp',
      type: 'link',
      path:'/pages/whatsapp-connect'
    },
    {
      title: 'Message & Replies',
      icon: 'chat',
      type: 'link',
      path:'/pages/message-replies'
    },
    {
      title: 'Chatflow',
      icon: 'chat',
      type: 'link',
      path:'/pages/chat'
    },
  ];
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}

