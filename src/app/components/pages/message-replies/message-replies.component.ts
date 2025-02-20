import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReplyType, Type } from './message-replies.constant';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';
import { LoaderService } from '../../../shared/services/loader.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastService } from '../../../shared/services/toast.service';
import { FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-message-replies',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    FilePondModule,
    ReactiveFormsModule
  ],
  templateUrl: './message-replies.component.html',
  styleUrl: './message-replies.component.scss',
})
export class MessageRepliesComponent {
  // Form and UI state
  messageForm: FormGroup;
  submitForm: boolean = false;
  content?: any;
  viewForm: boolean = false;

  pageIndex: number = 1;
  pageSize: number = 10;
  totalItems = 0;
  search: FormControl;


  // Dropdown constants
  readonly replytype = ReplyType;
  readonly type = Type;

  // Data collections
  public storeMessageReplies: any = [];
  public storeAllMessageReplies: any = [];
  public getTemplateStoreRecords: any[] = [];
  public getFlowStoreRecords: any[] = [];
  public templateComponents: any[] = [];

  //# Start Region for the POND package config
  public pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
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

  selectedId:any=null;
  searchUpdater = new Subject<string>();

  @ViewChild('filter', { static: false }) filter: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _baseService: BaseService,
    private loader: LoaderService,
    private toastr: ToastService
  ) {
    this.search = new FormControl();
    this.searchUpdater
            .pipe(debounceTime(1000), distinctUntilChanged())
            .subscribe(() => this.getMessageReplies()); 
    this.messageForm = this.formBuilder.group({
      message: ['', [Validators.required]],
      name: ['', [Validators.required]],
      MessagesAndRepliesId: [''],
      type: ['', [Validators.required]],
      replyType: ['', [Validators.required]],
      replyContent: ['', [Validators.required]],
      templateId: [''],
      timer: ['', [ Validators.pattern('^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$') ]]
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
    this.getAllMessageReplies();
    this.getAllFlows();
    this.getTemplate();
  }

   /**
     * method for create form
     */
   defineForm() {
    
   }

  public onPageChange(page: number): void {
    this.pageIndex = page;
    this.getMessageReplies();
  }

  /**
   * get Message Replies Data
   */
  public getMessageReplies(): void {
    // API call to get message replies data
    const params: any = {
      page: this.pageIndex,
      perPage: this.pageSize,
    };
    if (!!this.search.value) {
      params['search'] = this.search.value;
    }
    this._baseService.get(url.getMessageReplies, params).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeMessageReplies = response?.data?.data;
          this.totalItems = response.data.totalCount

        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public getAllMessageReplies(): void {
 
    this._baseService.get(url.getAllMessageReplies, {}).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeAllMessageReplies = response?.data;
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
  public formReset() {
    this.submitForm = false;
    this.messageForm.reset({
      message: '',
      name:'',
      type: '',
      replyType: '',
      replyContent: '',
    });
    this.selectedId = null;
    this.templateComponents=[];
  }

  /**
   * get all flows
   */
  private getAllFlows() {
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
  private getTemplate() {
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

  /**
   * Save Message and Replies
   */
  private _saveMessageAndReplies(formData:any) {
    return this._baseService.post(url.saveMessageReplies, formData).subscribe({
      next: (response) => {
        this.getMessageReplies();
        this.formReset();
        this.templateComponents=[];
        this.pondFiles = [];
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

  /**
   * Update Message and Replies
   */
  private _updateMessageAndReplies(formData:any) {
    return this._baseService.patch(url.updateMessageReplies + this.selectedId, formData).subscribe({
      next: (response) => {
        this.getMessageReplies();
        this.formReset();
        this.templateComponents=[];
        this.pondFiles = [];
        this.modalService.dismissAll();
        this.viewForm = false;
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

  /*---------------------------------
  Public  methods
  -----------------------------------*/

  /**
   * method for the message form submit
   * @returns
   */
  public validSubmit() {
    this.submitForm = true;
    // if (this.messageForm.invalid) {
    //   return;
    // } else {
      this.loader.showLoader();

     


      // CHANGE PAYLOAD
      let initialPayload:any[] = []

      this.templateComponents.forEach((c)=>{

        // For the button
        if(c.type === 'BUTTONS'){
          c.buttons.forEach((btn:any,index:number) => {
            initialPayload.push({
              "type": "button",
              "index":index,
              "sub_type": btn.type.toLowerCase(),
              "parameters":[
                {
                  "type": "payload",
                  "payload": btn.text
                }
              ]
            })
          });
        }

        // For the Body
        if(c.type === 'BODY'){
          initialPayload.push({
            "type": "body",
          })
        }

        // For the Header
        if(c.type === 'HEADER'){
            // Image
            console.log('this.pondFiles: ', this.pondFiles);
            if (c.format === 'IMAGE') {
              initialPayload.push({
                "type": "header",
                "parameters":[
                {
                  "type": "image",
                  "image": {
                    "link":(Math.random() + 1).toString(36).substring(7)
                  }
                }
              ]
              })
            } else {
              initialPayload.push({
                "type": "header",
              })
            }
        }

        // For the Footer
        // if(c.type === 'FOOTER'){
        //   initialPayload.push({
        //     "type": "footer",
        //   })
        // }
      })

      let tempArray: any = [];

      const formData = new FormData();
      formData.append('message', this.messageForm.get('message')?.value);
      formData.append('type', this.messageForm.get('type')?.value);
      formData.append('replyType', this.messageForm.get('replyType')?.value);
      formData.append('name', this.messageForm.get('name')?.value);

      if(this.messageForm.get('timer')?.value){
        formData.append('timer', this.messageForm.get('timer')?.value);
      }
      
      if(this.messageForm.get('MessagesAndRepliesId')?.value){
        formData.append('MessagesAndRepliesId', this.messageForm.get('MessagesAndRepliesId')?.value);
      }

      if(this.messageForm.get('replyType')?.value === 'template'){
        formData.append('replyContent', JSON.stringify(initialPayload));
        formData.append('templateId', this.messageForm.get('templateId')?.value);
      } else {
        formData.append('replyContent',this.messageForm.get('replyContent')?.value
        );
      }

      if (this.pondFiles) {
        this.pondFiles.forEach((file: any) => {
          if (file.file instanceof File) {
            formData.append('file', file.file);
          } else if (file.source && file.options?.type === 'remote') {
            tempArray.push(file.source);
          }
        });
      }

      // if (tempArray.length > 0) {
      //   formData.append('file', JSON.stringify(tempArray[0]));
      // }
      

      if(this.viewForm){
        this._updateMessageAndReplies(formData);
      } else {
        this._saveMessageAndReplies(formData);
      }
    // }
      
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
    this.messageForm.get('name')?.setValue(data.name);

    if(!!data.timer){
      this.messageForm.get('timer')?.setValue(data.timer);
    }

    if(!!data.MessagesAndRepliesId){
      this.messageForm.get('id')?.setValue(data.MessagesAndRepliesId);
    }
    
    if(data.replyType == 'template'){
      this.messageForm.get('templateId')?.setValue(data.templateId);
      this.onTemplateSelect(data.MessageTemplate);
    } else if(data.replyType == 'text') {
      this.messageForm.get('replyContent')?.setValue(data.replyContent);
    } else{
      let tempImage:any = []
      tempImage.push(data.replyContent)
        this.pondFiles = tempImage.map((imageUrl: string) => ({
        source: imageUrl,
        options: {
          type: 'remote', // This is important for displaying the image
        },
      }));
    }
    
    this.selectedId = data.id
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

  public onTemplateSelect(templateId: any) {
    // Fetch components for the selected template by templateId
    const selectedTemplate = this.getTemplateStoreRecords.find(
      (template) => template.id === templateId.id
    );
    
    if (selectedTemplate) {
      this.templateComponents = selectedTemplate.components;
    }
  }

  public searchTemp(event: any) {
    this.search.setValue(event.target.value);
    this.searchUpdater.next(this.filter.nativeElement.value);
  }

  public resetSearch() {
    this.search.setValue('');
    this.searchUpdater.next('');
  }

}
