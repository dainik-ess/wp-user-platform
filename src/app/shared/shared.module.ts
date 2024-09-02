import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { LandingSwitcherComponent } from './components/landing-switcher/landing-switcher.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppshowcodeDirective } from './directives/appshowcode.directive';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PageheaderLayoutComponent } from './layouts/pageheader-layout/pageheader-layout.component';
import { CustomService } from './services/custom.serviec';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ContentLayoutComponent,
        SwitcherComponent,
        PageHeaderComponent,
        TabToTopComponent,
        LoaderComponent,
        FooterComponent,
        FullscreenDirective,
        HoverEffectSidebarDirective,
        AppshowcodeDirective,  
        AuthenticationLayoutComponent,
        LandingSwitcherComponent,
        LandingLayoutComponent,
        PageheaderLayoutComponent
    ],
    
    imports:[
        CommonModule,
        RouterModule,
        SimplebarAngularModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgbModule,
        AngularFireAuthModule
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        ContentLayoutComponent,
        SwitcherComponent,
        PageHeaderComponent, 
        TabToTopComponent,
        LoaderComponent, 
        FooterComponent,
        FullscreenDirective,
        AppshowcodeDirective,
        HoverEffectSidebarDirective,
        AuthenticationLayoutComponent,
        LandingSwitcherComponent,
        LandingLayoutComponent,
        
    ],
    providers:[ColorPickerService, CustomService],
})

export class SharedModule { }
