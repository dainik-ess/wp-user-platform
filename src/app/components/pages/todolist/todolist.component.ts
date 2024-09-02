import { Component } from '@angular/core';
import flatpickr from 'flatpickr';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [SharedModule,NgSelectModule,MaterialModuleModule,FlatpickrModule,FormsModule,ReactiveFormsModule,NgbModule],
  providers:[FlatpickrDefaults],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  closeResult!: string;
  model!: NgbDateStruct;

  constructor(private modalService: NgbModal) {}

  openWindowCustomClass(content: any) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      centered: true,
    });
  }
  selectedSimpleItem = 'Two';
  simpleItems: any = ['Select'];
  selectedasigned = [4];
  Asigned = [
    { id: 1, name: 'Hercules Jhon' },
    { id: 2, name: 'Kiara Advain', disabled: true },
    { id: 3, name: 'Mayour kim' },
    { id: 4, name: 'Angellin may' },
  ];

  flatpickrOptions: any = {
    inline: true,
  };
  ngOnInit() {
    this.simpleItems = ['Critical', 'High', 'Medium', 'low'];
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

}
