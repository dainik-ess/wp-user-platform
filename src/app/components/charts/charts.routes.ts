      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [  
       {path:'charts',children:[ {
        path: 'chartjs',
        loadComponent: () =>
          import('./chartjs/chartjs.component').then((m) => m.ChartjsComponent),
          title: 'YNEX - Chartsjs'
      },
      {
        path: 'echart',
        loadComponent: () =>
          import('./echarts/echarts.component').then(
            (m) => m.EchartsComponent
          ),
          title: 'YNEX - E-Charts'
          
      },
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class chartsRoutingModule {
        static routes = admin;
      }