     import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'pages/blog',children:[ {
        path: 'blog',
        loadComponent: () =>
          import('./blog/blog.component').then((m) => m.BlogComponent),
          title: 'YNEX - Blog'
      },
      {
        path: 'blog-details',
        loadComponent: () =>
          import('./blog-details/blog-details.component').then(
            (m) => m.BlogDetailsComponent
          ),
          title: 'YNEX - Blog Details'
      },
      {
        path: 'create-blog',
        loadComponent: () =>
          import('./create-blog/create-blog.component').then(
            (m) => m.CreateBlogComponent
          ),
          title: 'YNEX -  Create Blog'
      },
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class blogRoutingModule {
        static routes = admin;
      }