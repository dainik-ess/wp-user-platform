import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { FilePondModule } from 'ngx-filepond';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { FlatpickrModule } from 'angularx-flatpickr';

@Component({
  selector: 'app-editproducts',
  standalone: true,
  imports: [
    SharedModule,
    FilePondModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    NgxDropzoneModule,
    AngularEditorModule,
    HttpClientModule,
    FlatpickrModule
],
  providers: [],

  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.scss'],
})
export class EditproductsComponent {

  basicDemoValue = '2017-01-01';
  timePicker: Date | null = null;

  //ngx-dropzon
  files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  files3: File[] = [];
  OnSelect3(event: any) {
    this.files3.push(...event.addedFiles);
  }

  OnRemove3(event: any) {
    this.files2.splice(this.files3.indexOf(event), 1);
  }

  public type: string = 'component';

  public disabled: boolean = false;

  constructor() {}

  public toggleType(): void {
    this.type = this.type === 'component' ? 'directive' : 'component';
  }

  public toggleDisabled1(): void {
    this.disabled = !this.disabled;
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

  //select 1
  selectedSimpleItem = 'select';
  simpleItems: any = [];
  //select 2
  selectedSimpleItem1 = 'select';
  simpleItems1: any = [];
  //select 3
  selectedSimpleItem2 = 'select';
  simpleItems2: any = [];
  //select 4
  selectedSimpleItem3 = 'select';
  simpleItems3: any = [];
  //select 5
  selectedSimpleItem4 = 'select';
  simpleItems4: any = [];
  //select 6
  selectedSimpleItem5 = 'select';
  simpleItems5: any = [];

  //select 7
  producttags = ['Plain'];
  tags = [
    { id: 1, name: 'Plain', },
    { id: 2, name: 'Relaxed' },
    { id: 3, name: 'Washed' },
    { id: 4, name: 'solid' },
  ];
  //select 8
  selectedSimpleItem6 = 'select';
  simpleItems6: any = [];
  ngOnInit() {
    this.simpleItems = [
      'Jewellery',
      'Ethnic & Festive',
      'Grooming',
      'Accesories',
      'Footwear',
      'Category',
      'Clothing',
    ];
    this.simpleItems1 = ['Male', 'All', 'Female', 'Others'];
    this.simpleItems2 = ['Small', 'Medium', 'Extra Large', 'Large'];
    this.simpleItems3 = ['Armani', 'Lacoste', 'Arrrabi', 'Mufti'];
    this.simpleItems4 = ['White', 'Red', 'Pink', 'Yellow', 'Orange', 'Green'];
    this.simpleItems5 = ['Publish', 'Scheduled'];
    this.simpleItems6 = ['In Stock', 'Out Of Stock'];
  }
  htmlContent: string = `<ul><li>Care Instructions: Machine Wash</li><li>Neckline: The pullover is framed with a Crew Neck</li>
  <li>Fit Type: Regular Fit</li><li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
  <li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li>
  <li>Solid: The pullover is available in solid pattern.</li></ul>`;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  // toggleDisabled() {
  //   const car: any = this.cars[1];
  //   car.disabled = !car.disabled;
  // }

  // ngx-editor
  public editorContent!: FormGroup;
  editordoc = '';
  public editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


}
