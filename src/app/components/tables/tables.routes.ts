import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'tables',
    children: [
      {
        path: 'angular-material-tables',
        loadComponent: () =>
          import(
            './angular-material-tables/angular-material-tables.component'
          ).then((m) => m.AngularMaterialTablesComponent),
          title: 'YNEX - Angular Material Tables'
      },
      {
        path: 'data-tables',
        loadComponent: () =>
          import('./data-tables/data-tables.component').then(
            (m) => m.DataTablesComponent
          ),
          title: 'YNEX - Data Tables'
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('./tables/tables.component').then((m) => m.TablesComponent),
          title: 'YNEX - Tables'
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class tablesRoutingModule {
  static routes = admin;
}
