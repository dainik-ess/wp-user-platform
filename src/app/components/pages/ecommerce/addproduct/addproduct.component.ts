import { Time } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilePondComponent,FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,AngularEditorModule,HttpClientModule,FilePondModule,NgxDropzoneModule,FlatpickrModule],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  // basicDemoValue = '2017-01-01';
  // timePicker: Date | null = null;

  // files2: File[] = [];
  // OnSelect2(event: any) {
  //   this.files2.push(...event.addedFiles);
  // }

  // OnRemove2(event: any) {
  //   this.files2.splice(this.files2.indexOf(event), 1);
  // }

   //select 1
   selectedSimpleItem = 'Category';
   simpleItems: any = [
    'Accesories',
    'Clothings',
    'Dining',
    'Athnic & Festive','Festive Gift',
    'Grooming',
    'Footwear',
    'Jewellery',
    'Stationary',
    'Toys & BabyCare'
   ];
   //select 2
   selectedSimpleItem1 = 'select';
   simpleItems1: any = [
    'All','Male','Female','Others'
   ];
   //select 3
   selectedSimpleItem2 = 'select';
   simpleItems2: any = [
    'Extra Small','Small','Medium','Extra Large','Large'
   ];
   //select 4
  //  selectedSimpleItem3 = 'select';
  //  simpleItems3: any = [
  //   'Armani','Lacoste','Puma','Spykar','Mufti','Arrabi'
  //  ];
   //select 5
   selectedSimpleItem4 = 'select';
   simpleItems4: any = [
    'White','Orange','Purple','Pink','Blue','Yellow'
   ];
   //select 6
  //  selectedSimpleItem5 = 'select';
  //  simpleItems5: any = [
  //   'Published',
  //   'Scheduled'
  //  ];
    //select 8
  selectedSimpleItem6 = 'select';
  simpleItems6: any = [
    'In Stock','Out of stock'
  ];

    //select 7
  // selectedCars = ['select'];
  // cars = [
  //   { id: 1, name: 'Plain', disabled: true },
  //   { id: 2, name: 'Relaxed' },
  //   { id: 3, name: 'Washed' },
  //   { id: 4, name: 'Solid' },
  // ];

  //  htmlContent: string = '';
  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
  //   toolbarHiddenButtons: [['bold']],
  //   customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText',
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  // };

  @ViewChild("myPond") myPond!: FilePondComponent;


  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };

  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  pondFiles: FilePond.FilePondOptions["files"] = [
    {
      source: "assets/photo.jpeg",
      options: {
        type: "local",
      },
    },
  ];

  pondHandleInit() {
    // console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log("A file was added", event);
  }

  pondHandleActivateFile(event: any) {
    // console.log("A file was activated", event);
  }

}