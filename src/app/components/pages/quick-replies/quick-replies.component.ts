import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { url } from '../../../app.router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, lastValueFrom } from 'rxjs';
import { debounceTime, findIndex } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../shared/services/toast.service';
import { QuickReplyType } from './quick-replies.constant';

@Component({
  selector: 'app-quick-replies',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
  ],
  templateUrl: './quick-replies.component.html',
  styleUrl: './quick-replies.component.scss',
})
export class QuickRepliesComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number = 10;
  totalItems = 0;

  // Search
  search: FormControl;
  searchUpdater = new Subject<string>();
  @ViewChild('filter', { static: false }) filter: any;

  // Data collections
  public storeQuickReplies: any = [];
  public expandedElement: any = null;
  public exitingMessage:any = [];
  public exitingMessageClone:any = [];

  readonly replytype = QuickReplyType;

  quickReplyForm: FormGroup;
  selectedType: string = ''; // Bind the selected type dynamically

  public editID: any = null;

  constructor(
    private _baseService: BaseService,
    private loader: LoaderService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastService
  ) {
    this.search = new FormControl();
    this.searchUpdater
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => this.getAllQuickReplies());

    this.quickReplyForm = this.fb.group({
      name: [{value:'',disabled:false}, Validators.required],
      messageType: [''],
      items: this.fb.array([]),
    });
  }

  get items() {
    return this.quickReplyForm.get('items') as FormArray;
  }

  ngOnInit(): void {
    this.initializer();
  }
  /*---------------------------------
  Public  methods
  -----------------------------------*/
  /**
   * Method to get all quick replies
   */
  getAllQuickReplies(): void {
    this.loader.showLoader();
    const params: any = {
      page: this.pageIndex,
      perPage: this.pageSize,
    };
    if (!!this.search.value) {
      params['search'] = this.search.value;
    }
    this._baseService.get(url.getAllQuickReplies, params).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeQuickReplies =
            response?.data?.quickReplies?.map((item: any) => ({
              ...item,
              expand: false,
            })) || [];

          this.totalItems = response.data.totalCount;
          this.expandedElement = null;
        }
      },
      error: (error) => {
        this.toastr.showToastMessage(error, 'error-style');
        return;
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  searchTemp(event: any) {
    this.search.setValue(event.target.value);
    this.searchUpdater.next(this.filter.nativeElement.value);
  }

  onPageChange(event: any): void {
    this.pageIndex = event;
    this.getAllQuickReplies();
  }

  resetSearch() {
    this.search.setValue('');
    this.searchUpdater.next('');
  }

  toggleRow(item: any) {
    this.expandedElement = this.expandedElement === item ? null : item;
    console.log('this.expandedElement: ', this.expandedElement);
  }

  removeQuickReplies(id: any) {
    this.loader.showLoader();
    this._baseService.delete(url.deleteQuickReplies + id).subscribe({
      next: (response) => {
        if (response?.success) {
          this.getAllQuickReplies();
          this.toastr.showToastMessage(response.message, 'success-style');
        }
      },
      error: (error) => {
        this.toastr.showToastMessage(error, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  openModal(content: any) {
    this.quickReplyForm.get('name')?.enable();
    this.modalService.open(content, { size: 'md', centered: true });
  }

  addItem(): void {
    const selectedType = this.quickReplyForm.get('messageType')?.value;

    if (selectedType) {
      const itemForm = this.fb.group({
        type: [selectedType, Validators.required],
        text: [''],
        image: [null],
        video: [null],
        audio: [null],
        document: [null],
      });

      this.items.push(itemForm);
    }
  }

  // Handle change in the message type dropdown
  onTypeChange(): void {
    const selectedType = this.quickReplyForm.get('messageType')?.value;
    if (selectedType) {
      this.addItem(); // Add the first item for the selected type
    }
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    this.loader.showLoader();
    const formData = new FormData();
    formData.append('name', this.quickReplyForm.get('name')?.value);

    this.items.controls.forEach((control, index) => {
      if (
        control.get('type')?.value === 'text' &&
        !!control.get('text')?.value
      ) {
        formData.append('text', control.get('text')?.value);
      }
      if (
        control.get('type')?.value === 'image' &&
        control.get('image')?.value instanceof File
      ) {
        formData.append('image', control.get('image')?.value);
      }
      if (
        control.get('type')?.value === 'video' &&
        control.get('video')?.value instanceof File
      ) {
        formData.append('video', control.get('video')?.value);
      }
      if (
        control.get('type')?.value === 'document' &&
        control.get('document')?.value instanceof File
      ) {
        formData.append('document', control.get('document')?.value);
      }
      if (
        control.get('type')?.value === 'audio' &&
        control.get('audio')?.value instanceof File
      ) {
        formData.append('audio', control.get('audio')?.value);
      }
    });

    if(this.exitingMessage && this.exitingMessage.length != this.exitingMessageClone.length && this.editID){
      formData.append('messages', JSON.stringify(this.exitingMessage));
    }

    const METHOD = this.editID ? 'put' : 'post'
    const URL = this.editID ? url.updateSaveQuickReply + this.editID : url.saveQuickReplies
    this._baseService[METHOD](URL, formData).subscribe({
      next: (response) => {
        if (response?.success) {
          this.getAllQuickReplies();
          this.reset();
          this.modalService.dismissAll();
          this.toastr.showToastMessage(response.message, 'success-style');
        }
      },
      error: (error) => {
        this.toastr.showToastMessage(error, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  onFileSelected(event: Event, index: number, type: string): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.items.controls[index].get(type)?.setValue(file);
    }
  }

  async editQuickReplies(item: any, content: any) {
    if (content) {
      this.openModal(content);
    }
    this.editID = item.id;
    // API Calling for the Quick Reply
    try {
      const res = await this.getSingleQuickReply(this.editID);
      this.quickReplyForm.get('name')?.setValue(res.name);
      this.quickReplyForm.get('name')?.disable(); // Disable the input field in edit mode
      this.exitingMessage = res.QuickReplyMessages
    } catch (error) {
      console.error('Error fetching single quick reply:', error);
    }
  }

  /**
   * reset method
   */
  reset(): void {
    this.quickReplyForm.reset();
    this.items.clear();
    this.exitingMessage = [];
    this.exitingMessageClone = [];
    this.editID = null;
  }

  removeExitingQuickReply(item: any) {
    const fineExitingIndex = this.exitingMessage.findIndex((res: any) => res.id == item.id);
  
    if (fineExitingIndex !== -1) {
      this.exitingMessage.splice(fineExitingIndex, 1);
    }
  }

  /*---------------------------------
  Private  methods
  -----------------------------------*/

  /**
   * Method to initialize data
   */
  private initializer(): void {
    this.getAllQuickReplies();
  }

  /**
   * Get Single Quick Reply
   */
  private async getSingleQuickReply(id: number): Promise<any> {
    try {
      this.loader.showLoader();

      // Convert Observable to Promise using lastValueFrom
      const response = await lastValueFrom(
        this._baseService.get(url.getSingleQuickReply + id, {})
      );

      this.loader.hideLoader();

      if (response?.success) {
        return response.data;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error: any) {
      this.loader.hideLoader();
      this.toastr.showToastMessage(error, 'error-style');
      throw error; // Rethrow to handle errors in the calling function
    }
  }
}
