import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';
import { LoaderService } from '../../../shared/services/loader.service';
import { ToastService } from '../../../shared/services/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { FlowModalComponent } from './flow-modal/flow-modal.component';
import { NgbDropdownModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    MatStepperModule,
    NgbDropdownModule,
    NgSelectModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    CommonModule,
    NgbPaginationModule,
    NgbTooltipModule,
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  templateType: string = 'custom';
  currentTime: Date = new Date();
  addTemplate:boolean = false;
  getAllTemplateList:any;

  customTemp = {
    tempName: null as string | null,
    headerText: null as string | null,
    footerText: null as string | null,
    selectedHeaderType: null as string | null,
    bodyContent: null as string | null,
    imagePreview: null as string | null,
  };

  buttonValue = {
    call_phone_btn:'',
  }

  addButtonFlow = [
    {
      id:1,
      maximum_button:2,
      label:'Visit website',
      value:'visit_website'
    },
    {
      id:2,
      maximum_button:1,
      label:'Call phone number',
      value:'call_phone_btn'
    },
    {
      id:3,
      maximum_button:1,
      label:'Complete Flow',
      value:'complete_flow'
    },
    {
      id:4,
      maximum_button:1,
      label:'Copy offer code',
      value:'copy_offer_code'
    }
  ]

  tempButton: Array<{ type: string; text: string; url?: string;phone_number?:string }> = []; 

  selectedButtonType: string = '';

  headerContent: any[] = [
    { id: 1, name: 'None', value: '' },
    { id: 2, name: 'Text', value: 'text' },
    { id: 3, name: 'Image', value: 'image' },
  ];

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName',
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
      ],
    ],
  };

  readonly dialog = inject(MatDialog);

  imageMeta:any = {}


  constructor(
    private _baseService: BaseService,
    private loader: LoaderService,
    private toastr: ToastService
  ) {}

  ngOnInit(): void {
    this.getAllTemplate();
  }

  onFileSelected(event: Event): void {
    this.imageMeta = {}
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.customTemp.imagePreview = reader.result as string;
      };

      reader.readAsDataURL(file); // Convert image to base64

      this.imageMeta.fileLength = file.size;
      this.imageMeta.fileType = file.type;
      this.imageMeta.fileName = file.name;
    }
  }

  public templateSave() {
    if (!this.templateType || this.templateType == null) {
      return;
    }
    this.loader.showLoader();
    if (this.templateType === 'custom') {
      let customTempObj: any = {
        name: this.customTemp.tempName,
        category: 'marketing',
        language: 'en_US',
        allowCategoryChange: true,
        components: [
          {
            type: 'BODY',
            text: this.customTemp.bodyContent,
          },
        ],
      };

      if (this.customTemp.footerText) {
        customTempObj.components.push({
          type: 'FOOTER',
          text: this.customTemp.footerText,
        });
      }

      if(this.selectedButtonType){
        customTempObj.components.push({
          type: "BUTTONS",
          buttons : this.tempButton
        })
      }

      if (this.customTemp.selectedHeaderType === 'text') {
        customTempObj.components.push({
          type: 'HEADER',
          text: this.customTemp.headerText,
        });
      } else if (this.customTemp.selectedHeaderType === 'image') {

        // Passed Image in binary


        // customTempObj.components.push({
        //   type: 'HEADER',
        //   image: this.customTemp.imagePreview,
        // });
        this.createUploadSession(this.imageMeta.fileLength,this.imageMeta.fileType,this.imageMeta.fileName)
      }

      this._baseService.post(url.saveTemplate, customTempObj).subscribe({
        next: (response) => {
          if (response) {
            this.addTemplate = false
            this.toastr.showToastMessage(response.message, 'success-style');

          }
        },
        error: (err) => {
          this.toastr.showToastMessage(err, 'error-style');
        },
        complete: () => {
          this.loader.hideLoader();
        },
      });
    }
  }

  public openFlowModal(flowType:string){
    const dialogRef = this.dialog.open(FlowModalComponent,{
      width: '70%',
      height:'80%'
    });
  }

  public selectButtonTypeMethod(addButtonFlow: any) {
    this.selectedButtonType = addButtonFlow.value;

    if (!Array.isArray(this.tempButton)) {
      this.tempButton = [];
    }
  
    // Create new button data
    const newButtons = Array.from({ length: addButtonFlow.maximum_button }, () => ({
      type: this.selectedButtonType,
      text: '',
      url: ''
    }));
  
    // Concatenate the new buttons with the existing ones
    this.tempButton = [...this.tempButton, ...newButtons];
  }

  public deleteTemplate(id:string){
    this.loader.showLoader();this._baseService.delete(url.deleteTemplate+id).subscribe({
      next: (response) => {
        if(response?.success){
          this.getAllTemplate();
          this.toastr.showToastMessage(response.message, 'success-style');
        }
      },
      error: (err) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  public deleteButton(id:any){
    this.tempButton.splice(id,1);
    this.tempButton = this.tempButton
  }

  private getAllTemplate(){
    this.loader.showLoader();
    this._baseService.get(url.getAllTemplate, {}).subscribe({
      next: (response) => {
        if(response?.success){
          this.getAllTemplateList = response?.data?.data
        }
      },
      error: (err) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

 private createUploadSession(file_length:number,file_type:string,file_name:string){
  console.log('file_name: ', file_name);
  console.log('file_type: ', file_type);
  console.log('file_length: ', file_length);

 }

 private uploadMediaMeta(){

 }
  
  
}
