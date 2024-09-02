     import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'pages',children:[ {
        path: 'about-us',
        loadComponent: () =>
          import('./aboutus/aboutus.component').then((m) => m.AboutusComponent),
          title: 'YNEX - About us'
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat/chat.component').then(
            (m) => m.ChatComponent
          ),
          title: 'YNEX - Chat'
      },
      {
        path: 'contactus',
        loadComponent: () =>
          import('./contactus/contactus.component').then(
            (m) => m.ContactusComponent
          ),
          title: 'YNEX - Contact us'
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./contacts/contacts.component').then((m) => m.ContactsComponent),
          title: 'YNEX - Contacts'
      },
      {
        path: 'emptypage',
        loadComponent: () =>
          import('./emptypage/emptypage.component').then((m) => m.EmptypageComponent),
          title: 'YNEX - Empty page'
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./faqs/faqs.component').then((m) => m.FaqsComponent),
          title: 'YNEX - Faqs'
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./timeline/timeline.component').then((m) => m.TimelineComponent),
          title: 'YNEX - Timeline'
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then((m) => m.NotificationsComponent),
          title: 'YNEX - Notifications'
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./pricing/pricing.component').then((m) => m.PricingComponent),
          title: 'YNEX - Pricing'
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./team/team.component').then((m) => m.TeamComponent),
          title: 'YNEX - Team'
      },
      {
        path: 'terms-conditions',
        loadComponent: () =>
          import('./terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent),
          title: 'YNEX - Terms Conditions'
      },
      {
        path: 'todolist',
        loadComponent: () =>
          import('./todolist/todolist.component').then((m) => m.TodolistComponent),
          title: 'YNEX - Todolist'
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
          title: 'YNEX - Profile'
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./reviews/reviews.component').then((m) => m.ReviewsComponent),
          title: 'YNEX - Reviews'
      },
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class pagesRoutingModule {
        static routes = admin;
      }