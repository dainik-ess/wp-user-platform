import { Component } from '@angular/core';

import flatpickr from 'flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [SharedModule, FlatpickrModule, FormsModule, ReactiveFormsModule, NgSelectModule, NgbModule],
  providers:[FlatpickrDefaults],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {

  selectedSimpleItem = 'Select Currency';
  simpleItems: any = [];

  ngOnInit() {
    this.simpleItems = [
      'USD - (United States Dollar)',
      'BHD - (Bahraini Dinar)',
      'KWD - (Kuwaiti Dinar)',
      'CHF - (Swiss Franc)',
    ];
  }

  ngAfterViewInit() {
    const plus: any = document.querySelectorAll('.plus');
    const minus: any = document.querySelectorAll('.minus');
    function perfectChart() {
      plus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }
}
