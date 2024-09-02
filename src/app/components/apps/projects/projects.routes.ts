import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/projects',children:[ {
  path: 'create-project',
  loadComponent: () =>
    import('./create-project/create-project.component').then((m) => m.CreateProjectComponent),
    title: 'YNEX - Create Project'
},
{
  path: 'project-overview',
  loadComponent: () =>
    import('./project-overview/project-overview.component').then(
      (m) => m.ProjectOverviewComponent
    ),
    title: 'YNEX - Project Overview'
},
{
  path: 'project-list',
  loadComponent: () =>
    import('./project-list/project-list.component').then(
      (m) => m.ProjectListComponent
    ),
    title: 'YNEX - Project List'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class projectsRoutingModule {
  static routes = admin;
}