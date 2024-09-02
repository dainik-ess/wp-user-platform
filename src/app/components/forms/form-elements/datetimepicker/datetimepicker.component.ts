import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import flatpickr from 'flatpickr';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-datetimepicker',
  standalone: true,
  imports: [SharedModule,MaterialModuleModule,FormsModule,ReactiveFormsModule, MatDatepickerModule, FlatpickrModule],
  providers:[FlatpickrDefaults],
  templateUrl: './datetimepicker.component.html',
  styleUrl: './datetimepicker.component.scss'
})
export class DatetimepickerComponent {

 // timepicker
 basicDemoValue = '2017-01-01';
 modelValueAsDate: Date = new Date();
 dateTimeValue: Date = new Date();
 dateTimeValue1: Date = new Date();
 multiDates: Date[] = [new Date(), (new Date() as any)['fp_incr'](10)];
 rangeValue: { from: Date; to: Date } = {
   from: new Date(),
   to: (new Date() as any)['fp_incr'](10)
 };
 inlineDatePicker: Date = new Date();
 timePicker: Date | null = null;
 timePicker1: Date | null = null;
 timePicker2: Date | null = null;
 timePicker3: Date | null = null;
 timePicker4: Date | null = null;


 min='16:00 pm';
 max='22:00 pm';
 min1='04:00';
 max1='10:00';
 basicDemoValue1= '10:00';

}
