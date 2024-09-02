import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/crm',children:[ {
  path: 'companies',
  loadComponent: () =>
    import('./companies/companies.component').then((m) => m.CompaniesComponent),
    title: 'YNEX - Companies'
},
{
  path: 'contacts',
  loadComponent: () =>
    import('./contacts/contacts.component').then(
      (m) => m.ContactsComponent
    ),
    title: 'YNEX - Companies'
},
{
  path: 'deals',
  loadComponent: () =>
    import('./deals/deals.component').then(
      (m) => m.DealsComponent
    ),
    title: 'YNEX - Deals'
},
{
  path: 'leads',
  loadComponent: () =>
    import('./leads/leads.component').then((m) => m.LeadsComponent),
    title: 'YNEX - Leads'
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class crmRoutingModule {
  static routes = admin;
}