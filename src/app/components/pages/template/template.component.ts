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
import { HttpHeaders } from '@angular/common/http';

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
    // {
    //   id:1,
    //   maximum_button:2,
    //   label:'Visit website',
    //   value:'visit_website'
    // },
    // {
    //   id:2,
    //   maximum_button:1,
    //   label:'Call phone number',
    //   value:'call_phone_btn'
    // },
    {
      id:3,
      maximum_button:1,
      label:'Quick Reply',
      value:'QUICK_REPLY'
    },
    // {
    //   id:4,
    //   maximum_button:1,
    //   label:'Copy offer code',
    //   value:'copy_offer_code'
    // }
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
      this.imageMeta.fileName = file.name; // Get the name of the file
      this.imageMeta.file = fileInput.files[0];
    }
  }

  public async templateSave() {
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

      // if (this.customTemp.footerText) {
      //   customTempObj.components.push({
      //     type: 'FOOTER',
      //     text: this.customTemp.footerText,
      //   });
      // }

      if(this.selectedButtonType && this.tempButton.length > 0){
        customTempObj.components.push({
          type: "BUTTONS",
          buttons : this.tempButton
        })
      }

      if (this.customTemp.selectedHeaderType === 'text') {
        customTempObj.components.push({
          type: 'HEADER',
          text: this.customTemp.headerText,
          format:"TEXT"
        });
      } else if (this.customTemp.selectedHeaderType === 'image') {
        try {
          const imageTokenResponse:any = await this.uploadMediaMeta();
          const imageToken = imageTokenResponse?.data.h;
          if (imageToken) {
            customTempObj.components.push({
              type: 'HEADER',
              example: {
                "header_handle": [imageToken]
              },
              format: "IMAGE",
            });
          } 
        } catch (error:any) {
          this.toastr.showToastMessage(error, 'error-style');
          return;
        }
      }

      this._baseService.post(url.saveTemplate, customTempObj).subscribe({
        next: (response) => {
          if (response) {
            this.addTemplate = false;
            this.tempButton = [];
            this.customTemp = {
              tempName: null,
              headerText: null,
              footerText: null,
              selectedHeaderType: null,
              bodyContent: null,
              imagePreview: null,
            };
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


  private async uploadMediaMeta(): Promise<any> {
    const formData = new FormData();
    formData.append('file', this.imageMeta.file);
  
    // Return a promise that resolves when the API call completes
    return new Promise((resolve, reject) => {
      this._baseService.post(url.uploadMedia, formData).subscribe({
        next: (response) => {
          resolve(response); // Resolve the promise with the response
        },
        error: (err) => {
          console.error('Error uploading media:', err);
          reject(err); // Reject the promise with the error
        }
      });
    });
  }
  


 readFileAsBinary(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file); // Reads the file as binary data
  });
}
  
  
}
