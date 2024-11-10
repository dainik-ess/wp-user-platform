import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReplyType, Type } from './message-replies.constant';
import { Validators } from 'ngx-editor';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';
import { LoaderService } from '../../../shared/services/loader.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastService } from '../../../shared/services/toast.service';
import { FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';

@Component({
  selector: 'app-message-replies',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    FilePondModule,
  ],
  templateUrl: './message-replies.component.html',
  styleUrl: './message-replies.component.scss',
})
export class MessageRepliesComponent {
  messageForm: FormGroup;
  submitForm: boolean = false;
  content?: any;
  viewForm: boolean = false;

  public replytype = ReplyType;
  public type = Type;

  public storeMessageReplies: any = [];

  public getTemplateStoreRecords: any[] = [];
  public getFlowStoreRecords: any[] = [];

  //# Start Region for the POND package config
  public pondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here to Upload...',
    server: {
      load: (source: string) => {
        return {
          url: source,
          options: {
            type: 'local',
          },
        };
      },
      process: null,
      revert: null,
      restore: null,
      fetch: null,
    },
  };

  public pondFiles: FilePond.FilePondOptions['files'] = [];

  //# End Region for the POND package config



  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _baseService: BaseService,
    private loader: LoaderService,
    private toastr: ToastService
  ) {
    this.messageForm = this.formBuilder.group({
      message: ['', [Validators.required]],
      type: ['', [Validators.required]],
      replyType: ['', [Validators.required]],
      replyContent: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.initializer();
    this.submitForm = false;
  }

  /*---------------------------------
  Private  methods
  -----------------------------------*/
  /**
   * Method to initialize data
   */
  private initializer() {
    this.getMessageReplies();
    this.getAllFlows();
    this.getTemplate();
  }

  /**
   * get Message Replies Data
   */
  private getMessageReplies(): void {
    // API call to get message replies data
    let params = {
      page: 1,
      perPage: 10,
    };
    this._baseService.get(url.getMessageReplies, params).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeMessageReplies = response?.data?.data;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  /**
   * method for the form reset
   */
  private formReset() {
    this.submitForm = false;
    this.messageForm.reset({
      message: '',
      type: '',
      replyType: '',
      replyContent: '',
    });
  }

  /**
   * get all flows
   */
  getAllFlows() {
    this.loader.showLoader();

    this._baseService.get(url.getAllFlows, {}).subscribe({
      next: (response) => {
        if (response?.success) {
          this.getFlowStoreRecords = response?.data?.data;
        }
      },
      error: (error) => {
        this.getFlowStoreRecords = [];
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  /**
   * get all flows
   */
  getTemplate() {
    this.loader.showLoader();

    this._baseService.get(url.getAllTemplate, {}).subscribe({
      next: (response) => {
        if (response?.success) {
          this.getTemplateStoreRecords = response?.data?.data;
        }
      },
      error: (error) => {
        this.getFlowStoreRecords = [];
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  /*---------------------------------
  Public  methods
  -----------------------------------*/

  /**
   * method for the message form submit
   * @returns
   */
  public validSubmit() {
    this.submitForm = true;
    if (this.messageForm.invalid) {
      return;
    } else {
      this.loader.showLoader();

      let tempArray: any = [];

      const formData = new FormData();
      formData.append('message', this.messageForm.get('message')?.value);
      formData.append('type', this.messageForm.get('type')?.value);
      formData.append('replyType', this.messageForm.get('replyType')?.value);
      formData.append(
        'replyContent',
        this.messageForm.get('replyContent')?.value
      );

      if (this.pondFiles) {
        this.pondFiles.forEach((file: any) => {
          if (file.file instanceof File) {
            formData.append('file', file.file);
          } else if (file.source && file.options?.type === 'remote') {
            tempArray.push(file.source);
          }
        });
      }

      this._baseService.post(url.saveMessageReplies, formData).subscribe({
        next: (response) => {
          this.getMessageReplies();
          this.formReset();
          this.modalService.dismissAll();
          this.toastr.showToastMessage(response.message, 'success-style');
        },
        error: (error) => {
          this.toastr.showToastMessage(error, 'error-style');
        },
        complete: () => {
          this.loader.hideLoader();
        },
      });
    }
  }

  /**
   * Open modal
   * @param content modal content
   */
  public openModal(content: any) {
    this.formReset();
    this.viewForm = false;
    this.modalService.open(content, { size: 'md', centered: true });
  }

  /**
   * View button to open modal with pre-filled data
   * @param content modal content
   * @param data pre-filled form data
   */
  public viewButton(content: any, data: any) {
    this.viewForm = true;
    this.modalService.open(content, { size: 'md', centered: true });
    this.messageForm.get('message')?.setValue(data.message);
    this.messageForm.get('type')?.setValue(data.type);
    this.messageForm.get('replyType')?.setValue(data.replyType);
    this.messageForm.get('replyContent')?.setValue(data.replyContent);
  }

  public deleteMessage(id: string) {
    this.loader.showLoader();
    this._baseService.delete(url.deleteMessageReplies + id).subscribe({
      next: (response) => {
        this.getMessageReplies();
        this.toastr.showToastMessage(response.message, 'success-style');
      },
      error: (error) => {
        this.toastr.showToastMessage(error, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  /**
   * File add method
   * @param event 
   */
  public pondHandleAddFile(event: any): void {
    // Ensure pondFiles is defined
    if (this.pondFiles) {
      // Push the new file to the pondFiles array
      this.pondFiles.push(event.file);
    }
  }

  public pondRemoveFile(event: any): void {
    // Ensure pondFiles is defined
    if (this.pondFiles) {
      const removedFile = event.file; // Get the removed file object
      // Find the index of the removed file in the pondFiles array
      const index = this.pondFiles.findIndex((file: any) => {
        // Compare using source or id, depending on FilePond's file structure
        return (
          file.source === removedFile.source ||
          file.file?.name === removedFile.file?.name
        );
      });

      // If the file is found, remove it from the array
      if (index > -1) {
        this.pondFiles.splice(index, 1);
      }
    }
  }
}
