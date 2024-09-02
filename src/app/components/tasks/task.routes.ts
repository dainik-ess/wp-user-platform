 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'task',children:[ {
  path: 'kanban-board',
  loadComponent: () =>
    import('./kanbanboard/kanbanboard.component').then((m) => m.KanbanboardComponent),
    title: 'YNEX - Kanban Board'
},
{
  path: 'list-view',
  loadComponent: () =>
    import('./list-view/list-view.component').then(
      (m) => m.ListViewComponent
    ),
    title: 'YNEX - List View'
},
{
  path: 'task-details',
  loadComponent: () =>
    import('./task-details/task-details.component').then(
      (m) => m.TaskDetailsComponent
    ),
    title: 'YNEX - Task Details'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class taskRoutingModule {
  static routes = admin;
}