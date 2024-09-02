import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [  
 {path:'authentication',children:[ {
  path: 'coming-soon',
  loadComponent: () =>
    import('./commingsoon/commingsoon.component').then((m) => m.CommingsoonComponent),
    title: 'YNEX - Coming Soon'
},
{
  path: 'under-maintainance',
  loadComponent: () =>
    import('./under-maintainance/under-maintainance.component').then(
      (m) => m.UnderMaintainanceComponent
    ),
    title: 'YNEX - Under Maintainance'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class authenticationRoutingModule {
  static routes = admin;
}