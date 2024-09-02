import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advanced-ui',children:[ {
  path: 'accordions',
  loadComponent: () =>
    import('./accordions/accordions.component').then((m) => m.AccordionsComponent),
    title: 'YNEX - Accordions'
},
{
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then(
      (m) => m.CarouselComponent
    ),
    title: 'YNEX - Carousel'
},
{
  path: 'draggable-cards',
  loadComponent: () =>
    import('./draggable-cards/draggable-cards.component').then(
      (m) => m.DraggableCardsComponent
    ),
    title: 'YNEX - Draggable Cards'
},
{
  path: 'modals-closes', 
  loadComponent: () =>
    import('../advancedui/modals-closes/modals-closes.component').then(
      (m) => m.ModalsClosesComponent
    ),    
    title: 'YNEX - Modals Closes'
},
{
  path: 'placeholders',
  loadComponent: () =>
    import('../advancedui/placeholders/placeholders.component').then(
      (m) => m.PlaceholdersComponent
    ),
    title: 'YNEX - Placeholders'
},
{
  path: 'navbar',
  loadComponent: () =>
    import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    title: 'YNEX - Navbar'
},
{
  path: 'offcanvas',
  loadComponent: () =>
    import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
    title: 'YNEX - Offcanvas'
},
{
  path: 'rating',
  loadComponent: () =>
    import('./ratings/ratings.component').then((m) => m.RatingsComponent),
    title: 'YNEX - Courses'
},
{
  path: 'scrollspy',
  loadComponent: () =>
    import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
    title: 'YNEX - Scrollspy'
},
{
  path: 'swiperjs',
  loadComponent: () =>
    import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
    title: 'YNEX - Swiperjs'
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}