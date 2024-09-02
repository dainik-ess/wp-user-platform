import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'ui-elements',children:[ {
  path: 'alerts',
  loadComponent: () =>
    import('./alerts/alerts.component').then((m) => m.AlertsComponent),
  title: 'YNEX - Alerts'
  },
{
  path: 'breadcrumb',
  loadComponent: () =>
    import('./breadcrumb/breadcrumb.component').then((m) => m.BreadcrumbComponent),
  title: 'YNEX - Breadcrumb'
  },
{
  path: 'buttons',
  loadComponent: () =>
    import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
  title: 'YNEX - Buttons'
  },
{
  path: 'badge',
  loadComponent: () =>
    import('./badge/badge.component').then(
      (m) => m.BadgeComponent
    ),
  title: 'YNEX - Badge'
  },
{
  path: 'button-group',
  loadComponent: () =>
    import('./buttongroup/buttongroup.component').then(
      (m) => m.ButtongroupComponent
    ),
  title: 'YNEX - Button Group'
  },
{
  path: 'cards',
  loadComponent: () =>
    import('./cards/cards.component').then((m) => m.CardsComponent),
  title: 'YNEX - Cards'
  },
{
  path: 'dropdowns',
  loadComponent: () =>
    import('./dropdowns/dropdowns.component').then((m) => m.DropdownsComponent),
  title: 'YNEX - Dropdowns'
  },
{
  path: 'images&figures',
  loadComponent: () =>
    import('./images-figures/images-figures.component').then((m) => m.ImagesFiguresComponent),
  title: 'YNEX - Images-Figures'
  },
{
  path: 'list-group',
  loadComponent: () =>
    import('./listgroup/listgroup.component').then((m) => m.ListgroupComponent),
  title: 'YNEX - List group'
  },
{
  path: 'nav-tabs',
  loadComponent: () =>
    import('./navtabs/navtabs.component').then((m) => m.NavtabsComponent),
  title: 'YNEX - Navtabs'
  },
{
  path: 'objectfit',
  loadComponent: () =>
    import('./objectfit/objectfit.component').then((m) => m.ObjectfitComponent),
  title: 'YNEX - Objectfit'
  },
{
  path: 'pagination',
  loadComponent: () =>
    import('./pagination/pagination.component').then((m) => m.PaginationComponent),
  title: 'YNEX - Pagination'
  },
{
  path: 'popovers',
  loadComponent: () =>
    import('./popovers/popovers.component').then((m) => m.PopoversComponent),
  title: 'YNEX - Popovers'
  },
{
  path: 'toasts',
  loadComponent: () =>
    import('./toasts/toasts.component').then((m) => m.ToastsComponent),
  title: 'YNEX - toasts'
  },
{
  path: 'progress',
  loadComponent: () =>
    import('./progress/progress.component').then((m) => m.ProgressComponent),
  title: 'YNEX - Progress'
  },
{
    path: 'spinners',
    loadComponent: () =>
      import('./spinners/spinners.component').then((m) => m.SpinnersComponent),
      title: 'YNEX - Spinners'
    },
  {
    path: 'toasts',
    loadComponent: () =>
      import('./toasts/toasts.component').then((m) => m.ToastsComponent),
      title: 'YNEX - Toasts'
    },
  {
    path: 'tooltips',
    loadComponent: () =>
      import('./tooltips/tooltips.component').then((m) => m.TooltipsComponent),
      title: 'YNEX - Tooltips'
    },
  {
    path: 'typography',
    loadComponent: () =>
      import('./typography/typography.component').then((m) => m.TypographyComponent),
      title: 'YNEX - Typography'
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class uielementsRoutingModule {
  static routes = admin;
}