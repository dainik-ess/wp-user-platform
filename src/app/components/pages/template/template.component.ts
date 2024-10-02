import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    MatStepperModule,
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
}
