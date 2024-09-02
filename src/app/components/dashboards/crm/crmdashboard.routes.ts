import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
    {path:'',children:[ {
        path: 'crm',
        loadComponent: () =>
          import('../crm/crm.component').then((m) => m.CrmComponent),
          title: 'YNEX - CRM'
      },
    ]
      }
]
@NgModule({
    imports: [RouterModule.forChild(admin)],
    exports: [RouterModule],
  })
  export class crmRoutingModule {
    static routes = admin;
  }