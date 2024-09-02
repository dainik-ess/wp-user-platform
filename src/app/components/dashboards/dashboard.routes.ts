import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales.component').then((m) => m.SalesComponent),
    title: 'YNEX - Sales'
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(
      (m) => m.AnalyticsComponent
    ),
    title: 'YNEX - Analytics'
},
{
  path: 'ecommerce',
  loadComponent: () =>
    import('./ecommerce/ecommerce.component').then(
      (m) => m.EcommerceComponent
    ),
    title: 'YNEX - Ecommerce'
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
    title: 'YNEX - HRM'
},
{
  path: 'nft',
  loadComponent: () =>
    import('./nft/nft.component').then((m) => m.NftComponent),
    title: 'YNEX - NFT'
},
{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
    title: 'YNEX - Crypto'
},
{
  path: 'jobs',
  loadComponent: () =>
    import('./jobs/jobs.component').then((m) => m.JobsComponent),
    title: 'YNEX - Jobs'
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'YNEX - Projects'
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses.component').then((m) => m.CoursesComponent),
    title: 'YNEX - Courses'
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks.component').then((m) => m.StocksComponent),
    title: 'YNEX - Stocks'
},
{
  path: 'personal',
  loadComponent: () =>
    import('./personal/personal.component').then((m) => m.PersonalComponent),
    title: 'YNEX - Personal'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}