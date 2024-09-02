import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FlatpickrModule } from 'angularx-flatpickr';
import { environment } from '../environments/environment';
import { CustomService } from './shared/services/custom.serviec';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    RouterOutlet,
    ColorPickerModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,  
    AngularFireModule,
    ColorPickerService,
    ToastrService,
    
    importProvidersFrom(
      CustomService,
      FlatpickrModule.forRoot(),
      ToastrModule.forRoot(),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      AngularFireModule.initializeApp(environment.firebase),
      BrowserAnimationsModule
    ),
  ],
};
