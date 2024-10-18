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
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

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
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  templateType: string = 'custom';
  currentTime: Date = new Date();

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

  tempButton: any = {};

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


  constructor(
    private _baseService: BaseService,
    private loader: LoaderService,
    private toastr: ToastService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.customTemp.imagePreview = reader.result as string;
      };

      reader.readAsDataURL(file); // Convert image to base64
    }
  }

  public templateSave() {
    console.log('called Data');
    if (!this.templateType || this.templateType == null) {
      return;
    }

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

      if (this.customTemp.selectedHeaderType === 'text') {
        customTempObj.components.push({
          type: 'HEADER',
          text: this.customTemp.headerText,
        });
      } else if (this.customTemp.selectedHeaderType === 'image') {
        customTempObj.components.push({
          type: 'HEADER',
          image: this.customTemp.imagePreview,
        });
      }

      this._baseService.post(url.saveTemplate, customTempObj).subscribe({
        next: (response) => {
          if (response) {
            
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
    this.tempButton = { 
      max: addButtonFlow.maximum_button, 
      data: new Array(addButtonFlow.maximum_button).fill({ type: this.selectedButtonType, text: '', url: '' }),
      type: addButtonFlow.value 
    };
  }
}
