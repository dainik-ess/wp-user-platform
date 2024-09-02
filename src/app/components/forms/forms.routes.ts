import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms',children:[ {
  path: 'form-layouts',
  loadComponent: () =>
    import('./form-layouts/form-layouts.component').then((m) => m.FormLayoutsComponent),
    title: 'YNEX - Form Layouts'
},
{
  path: 'floating-labels',
  loadComponent: () =>
    import('./floating-labels/floating-labels.component').then((m) => m.FloatingLabelsComponent),
    title: 'Noa - Floating Labels'
},
{
  path: 'validation',
  loadComponent: () =>
    import('./validation/validation.component').then(
      (m) => m.ValidationComponent
    ),
    title: 'YNEX - Validation'
},
{
  path: 'select2',
  loadComponent: () =>
    import('./select2/select2.component').then(
      (m) => m.Select2Component
    ),
    title: 'YNEX - Select2'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formsRoutingModule {
  static routes = admin;
}