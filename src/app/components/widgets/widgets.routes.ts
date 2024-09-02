import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'',children:[ {
  path: 'widgets',
  loadComponent: () =>
    import('./widgets/widgets.component').then((m) => m.WidgetsComponent),
    title: 'YNEX - Widgets'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class widgetsRoutingModule {
  static routes = admin;
}