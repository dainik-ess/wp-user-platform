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

@Component({
  selector: 'app-message-replies',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule,NgSelectModule],
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

  public getTemplateStoreRecords:any[] =[];
  public getFlowStoreRecords:any[] =[];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _baseService: BaseService,
    private loader: LoaderService
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
        if(response?.success){
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
  getAllFlows(){
    this.loader.showLoader();

    this._baseService.get(url.getAllFlows,{}).subscribe({
      next: (response) => {
        if(response?.success){
          this.getFlowStoreRecords = response?.data?.data
        }
      },
      error: (error) => {
        this.getFlowStoreRecords = []
      },
      complete: () => {
        this.loader.hideLoader();
      },
    })
  }

  /**
   * get all flows
   */
  getTemplate(){
    this.loader.showLoader();

    this._baseService.get(url.getAllTemplate,{}).subscribe({
      next: (response) => {
        if(response?.success){
          this.getTemplateStoreRecords = response?.data?.data
        }
      },
      error: (error) => {
        this.getFlowStoreRecords = []
      },
      complete: () => {
        this.loader.hideLoader();
      },
    })
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
      this._baseService
        .post(url.saveMessageReplies, this.messageForm.value)
        .subscribe({
          next: (response) => {
            this.getMessageReplies();
            this.formReset();
            this.modalService.dismissAll();
          },
          error: (error) => {
            console.error(error);
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
    this.messageForm.setValue(data);
  }
}
