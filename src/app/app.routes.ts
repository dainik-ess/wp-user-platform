import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { content } from './shared/routes/content.routes';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.routes';
import { LandingLayoutComponent } from './shared/layouts/landing-layout/landing-layout.component';
import { landing } from './shared/routes/landing.routes';
import { PageheaderLayoutComponent } from './shared/layouts/pageheader-layout/pageheader-layout.component';
import { content1 } from './shared/routes/crm.routes';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
   
    { path: '', component: ContentLayoutComponent, children: content , canActivate:[authGuard] },
    { path: '', component: PageheaderLayoutComponent, children: content1,canActivate:[authGuard] },
    { path: '', component: AuthenticationLayoutComponent, children: authen },
    { path: '', component: LandingLayoutComponent, children: landing ,canActivate:[authGuard]},
];
