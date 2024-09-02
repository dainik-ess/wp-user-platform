import { Component, ViewChild } from '@angular/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import flatpickr from 'flatpickr';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
@Component({
  selector: 'app-kanbanboard',
  standalone: true,
  imports: [
    SharedModule,
    NgSelectModule,
    FlatpickrModule,
    MaterialModuleModule,
    SimplebarAngularModule,
    FilePondModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    DropzoneModule,
    NgbModule
  ],
  providers: [FlatpickrDefaults],
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss'],
})
export class KanbanboardComponent {
  closeResult!: string;
  flatpickrOptions: any = {
    inline: true,
  };

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  selectedSimpleItem = 'Sort By';
  simpleItems: any = [];

  selectedSimpleItem1 = '';
  simpleItems1: any = [];

  selectedCars = ['select Tag'];
  cars = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Authentication' },
    { id: 3, name: 'Designing' },
    { id: 4, name: 'Development' },
    { id: 5, name: 'Finance' },
    { id: 5, name: 'Marketing' },
  ];

  constructor(private modalService: NgbModal) {}

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openWindowCustomClass1(content1: any) {
    this.modalService.open(content1, { centered: true });
  }
  ngOnInit(): void {
    this.simpleItems = ['Sort By', 'A-Z', 'Date Add', 'Newest', 'Type'];
    this.simpleItems1 = [
      'Angelina May',
      'Hercules Jhon',
      'Kairar Advin',
      'Mayour Kim',
    ];

    // dragula([
    //   document.querySelector('#left-defaults'),
    //   document.querySelector('#right-defaults'),
    //   document.querySelector('#left-events'),
    // ]);

    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };

    flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#pretime', this.flatpickrOptions);
  }

  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }
}
