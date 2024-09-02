import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,DropzoneModule,NgbModule,NgxDropzoneModule,AngularEditorModule,HttpClientModule,FlatpickrModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  basicDemoValue = '2017-01-01';
  basicDemoValue1 = '2017-01-01';

  htmlContent:string = ` <p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
  a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
  McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
  the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
  the cites of the word in classical literature, discovered the undoubtable source. Lorem
  Ipsum comes from sections 1.10.32 and 1.10.33.</p>
<p><br></p>
<ol>
  <li class="ql-size-normal">Conducting a comprehensive analysis of the existing website
      design.</li>
  <li class="">Collaborating with the UI/UX team to develop wireframes and mockups.</li>
  <li class="">Iteratively refining the design based on feedback../li>
  <li class="">Implementing the finalized design changes using HTML, CSS, and JavaScript.
  </li>
  <li class="">Testing the website across different devices and browsers.</li>
</ol>`;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...', 
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  public type: string = 'component';

  public disabled: boolean = false;

  constructor() {}

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled1(): void {
    this.disabled = !this.disabled;
  }


  public onUploadInit(args: any): void {
    // console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    // console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    // console.log('onUploadSuccess:', args);
  }
 
  model!: NgbDateStruct;
  model1!: NgbDateStruct;

  // Select 
  selectedSimpleItem='Completed';
  simpleItems:any=[];
// Select 1
  selectedSimpleItem1='High';
  simpleItems1:any=[];

  // select 3
  
  selectedCars = [1,2,3];
  cars = [
      { id: 1, name: 'Alexa Biss' },
      { id: 2, name: 'Alex Carey'},
      { id: 3, name: 'Angelina may' },
      { id: 4, name: 'Dareen Swami' },
  ];
ngOnInit(): void {
  this.simpleItems=['Completed','Inprogress','OnHold'];
  this.simpleItems1=['High','Low','medium',];
}
toggleDisabled() {
  const car: any = this.cars[1];
  car.disabled = !car.disabled;
}

files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  
}