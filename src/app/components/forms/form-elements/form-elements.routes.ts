import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms/form-elements',children:[ {
  path: 'inputs',
  loadComponent: () =>
    import('./inputs/inputs.component').then((m) => m.InputsComponent),
    title: 'YNEX - Inputs'
},
{
  path: 'checks-radios',
  loadComponent: () =>
    import('./checksradios/checksradios.component').then(
      (m) => m.ChecksradiosComponent
    ),
    title: 'YNEX - Checks-radios'
},
{
  path: 'inputgroup',
  loadComponent: () =>
    import('./inputgroup/inputgroup.component').then(
      (m) => m.InputgroupComponent
    ),
    title: 'YNEX - Inputgroup'
},
{
    path: 'formselect',
    loadComponent: () =>
      import('./formselect/formselect.component').then(
        (m) => m.FormselectComponent
      ),
      title: 'YNEX - Formselect'
  },
  {
    path: 'file-uploads',
    loadComponent: () =>
      import('./fileuploads/fileuploads.component').then(
        (m) => m.FileuploadsComponent
      ),
      title: 'YNEX - File uploads'
  },
  
  {
    path: 'datetimepicker',
    loadComponent: () =>
      import('./datetimepicker/datetimepicker.component').then(
        (m) => m.DatetimepickerComponent
      ),
      title: 'YNEX - Datetimepicker'
  },
  {
    path: 'color-pickers',
    loadComponent: () =>
      import('./colorpicker/colorpicker.component').then(
        (m) => m.ColorpickerComponent
      ),
      title: 'YNEX - Color Pickers'
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs.component').then(
        (m) => m.InputsComponent
      ),
      title: 'YNEX - Inputs'
  },
  {
    path: 'range-slider',
    loadComponent: () =>
      import('./rangeslider/rangeslider.component').then(
        (m) => m.RangesliderComponent
      ),
      title: 'YNEX - Range Slider'
  },
  {
    path: 'inputmask',
    loadComponent: () =>
      import('./input-mask/input-mask.component').then(
        (m) => m.InputMaskComponent
      ),
      title: 'YNEX - Range Slider'
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formelementsRoutingModule {
  static routes = admin;
}