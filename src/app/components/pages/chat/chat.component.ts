import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  SimplebarAngularComponent,
  SimplebarAngularModule,
} from 'simplebar-angular';
import { SharedModule } from '../../../shared/shared.module';
import {
  NgbModal,
  NgbModule,
  NgbNavModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import { CHAT } from './chat.constant';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChatService } from './service/chat.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Validators } from 'ngx-editor';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    SharedModule,
    SimplebarAngularModule,
    NgbNavModule,
    NgbModule,
    RouterModule,
    NgbPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InfiniteScrollModule,
    NgSelectModule,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('chatuserdetails') chatuserdetails!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('filter', { static: false }) filter: any;

  getAllConversationList: any;
  userMessage: any;

  activeUser: any;
  searchUser: FormControl;
  // searchUser: string | null = null;
  pageIndex: number = 1;
  message: string = '';

  file: File | null = null;
  showPreview: boolean = false;
  filePreviews: any = null;
  fileType: string = '';
  chatType: string = 'message';
  fileAccept: string = '';
  selectedFile: any;
  currentConversationId: string = '';
  searchUpdater = new Subject<string>();
  customerForm: FormGroup;
  newCustomerForm: FormGroup;
  storeQuickRepliesList: any = [];
  selectedQuickReplies: any[] = [];

  public customerID: string | null = null;

  public labelID: string | null = null;
  public actionID: string | null = null;
  public unRead:boolean | null = null;

  public storeActions:any = [];

  constructor(
    private formBuilder: FormBuilder,
    public elementRef: ElementRef,
    private toastr: ToastService,
    private loader: LoaderService,
    private _baseService: BaseService,
    private _chatService: ChatService,
    private _modalService: NgbModal,
    private router:Router
  ) {
    this.searchUser = new FormControl();
    this.searchUpdater
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => this.getAllConversation());

    this.customerForm = this.formBuilder.group({
      customerName: ['', [Validators.required]],
    });

    this.newCustomerForm = this.formBuilder.group({
      customerName: ['', [Validators.required]],
      customerNumber: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this._chatService.joinRoom('', this.currentConversationId);
  }

  ngOnInit(): void {
    this.getAllConversation();
    this.getAllMessage();
    this.getQuickReplies();
    this.getLabelList();
    this.getAllActions();
  }

  public bodyClick(): void {
    document.querySelector('#chat-user-details')?.classList.remove('open');
  }

  public handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document
        .querySelector('.main-chart-wrapper ')
        ?.classList.add('responsive-chat-open');
    }
  }

  public removedetails() {
    document.querySelector('.chat-user-details ')?.classList.remove('open');
  }

  public searchUserMethod() {
    // if (!this.searchUser) {
    //   // If no search query is entered, reset to the full list
    //   this.RecentData = this.tempUserData;
    //   return;
    // }
    // const query = this.searchUser.toLowerCase();
    // this.RecentData = this.tempUserData.filter((user: any) =>
    //   user.name.toLowerCase().includes(query)
    // );
  }

  public getUserMessage(user: any, isStarred: boolean = false) {
    user.unReadMessageCount = 0;
    this.activeUser = user;
    this.loader.showLoader();
    let payload: any = {
      conversationId: user.id,
      page: this.pageIndex,
    };

    if (isStarred) {
      payload.isStarred = true;
    }
    this._baseService.get(url.getSingleConversation, payload).subscribe({
      next: async (res: any) => {
        if (res) {
          this.userMessage = (res?.data?.data || res?.data).slice().reverse();

          this._chatService.joinRoom(
            res?.data?.data[0].conversationId,
            this.currentConversationId
          );
          this.currentConversationId = res?.data?.data[0].conversationId;

          this.scrollToBottom();
        }
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  public onScroll() {
    // this.pageIndex++;
    // this.getUserMessage(this.userMessage);
  }

  public sendMessage() {
    if (!this.message.trim() && this.files.length == 0) {
      this.toastr.showToastMessage(
        'Please enter a message or select a file to send.',
        'warning-style'
      );
      return;
    }
    this.loader.showLoader();
    const formData = new FormData();
    formData.append('to', this.activeUser?.whatsappUser?.phoneNumber);

    if (this.chatType == 'image') {
      this.chatType = 'image';
    } else if (this.chatType == 'video') {
      this.chatType = 'video';
    } else if (this.chatType == 'audio') {
      this.chatType = 'audio';
    } else if (this.chatType == 'document') {
      this.chatType = 'document';
    } else {
      this.chatType = 'text';
    }

    formData.append('type', this.chatType);

    if (this.message) {
      formData.append('message', this.message);
    }

    if (this.filePreviews?.length > 0) {
      this.files.forEach((file: any) => {
        formData.append('file', file);
      });
    }

    // search

    this._baseService.post(url.sendMessage, formData).subscribe({
      next: (res: any) => {
        if (res) {
          this.message = ''; // Clear message input
          this.files = []; // Reset file after sending
          this.filePreviews = [];
          this.selectedFile = null;
          this.chatType = 'message';
        }
        this.getUserMessage(this.activeUser);
        // this.getAllMessage();
        this.closePreview();
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  search(event: any) {
    this.searchUser.setValue(event.target.value);
    this.searchUpdater.next(this.filter.nativeElement.value);
  }

  resetSearch() {
    this.searchUser.setValue('');
    this.searchUpdater.next('');
  }
  files: any = [];
  public handleFileUpload(event: any): void {
    const files = event.target.files;
    this.files = Array.from(files);
    this.filePreviews = []; // Clear previous previews if needed

    if (files && files.length > 0) {
      Array.from(files).forEach((file: any) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          let fileType = 'document';
          if (file.type.includes('image')) {
            fileType = 'image';
          } else if (file.type.includes('audio')) {
            fileType = 'audio';
          } else if (file.type.includes('video')) {
            fileType = 'video';
          }

          const fileData = {
            name: file.name,
            preview: e.target.result,
            type: fileType,
          };

          this.filePreviews.push(fileData);

          if (!this.selectedFile && fileType === 'image') {
            this.selectedFile = fileData;
          }
          this.showPreview = true;
        };
        reader.readAsDataURL(file);
      });
    }
  }

  public selectFile(file: any): void {
    this.selectedFile = file;
  }

  public deleteFile(index: number, event: MouseEvent): void {
    event.stopPropagation(); // Prevent triggering the thumbnail click event
    this.filePreviews.splice(index, 1);

    // Update the selected file if the deleted file was the currently selected one
    if (this.selectedFile === this.filePreviews[index]) {
      this.selectedFile = this.filePreviews[0] || null;
    }

    if (this.filePreviews.length == 0) {
      this.showPreview = false;
    }
  }

  public closePreview() {
    this.showPreview = false;
    this.filePreviews = null;
    this.fileType = '';
  }

  public updateUserName(content: any, userData: any, event: any) {
    event.preventDefault(); // Prevent the default action, if any
    event.stopPropagation();
    this.customerID = userData?.userId;

    this.customerForm
      .get('customerName')
      ?.setValue(userData?.whatsappUser?.name);
    this._modalService.open(content, { size: 'md', centered: true });
  }

  public formReset() {
    this.customerForm.reset();
  }

  public validSubmit() {
    if (!this.customerForm.value) {
      return;
    }
    this.loader.showLoader();

    this._baseService
      .put(url.updateCustomerName + this.customerID, this.customerForm.value)
      .subscribe({
        next: (response) => {
          this.customerID = null;
          this._modalService.dismissAll();
          this.getAllConversation();
        },
        error: (err: any) => {
          this.toastr.showToastMessage(err, 'error-style');
        },
        complete: () => {
          this.loader.hideLoader();
        },
      });
  }

  public newCustomer(content: any) {
    this._modalService.open(content, { size: 'md', centered: true });
  }

  public validNewSubmit() {
    if (!this.newCustomerForm.value) {
      return;
    }
    this.loader.showLoader();

    this._baseService
      .post(url.addCustomerName, this.newCustomerForm.value)
      .subscribe({
        next: (response) => {
          this._modalService.dismissAll();
          this.newCustomerForm.reset();
          this.getAllConversation();
        },
        error: (err: any) => {
          console.log('err: ', err);
          this.toastr.showToastMessage(err, 'error-style');
        },
        complete: () => {
          this.loader.hideLoader();
        },
      });
  }

  public selectFileType(fileType: string) {
    this.fileAccept = fileType;
    setTimeout(() => {
      this.fileInput.nativeElement.click(); // Opens the file selector with the chosen file type after a brief delay
    }, 0);
  }

  private getAllMessage(): void {
    this._chatService.getMessages().subscribe({
      next: async (res: any) => {
        this.userMessage = res.slice().reverse();
        // this._chatService.joinRoom(res?.data?.data[0].conversationId,this.currentConversationId);
        // this.currentConversationId = res?.data?.data[0].conversationId;
      },
    });
  }

  public getAllConversation() {
    this.loader.showLoader();
    const params: any = {};

    if (!!this.searchUser.value) {
      params['search'] = this.searchUser.value;
    }

    if(this.unRead){
      params['unRead'] = true;
    }

    if(!!this.labelID){
      params['labelIds'] = this.labelID;
    }

    if(!!this.actionID){
      params['actionIds'] = this.actionID;
    }
    this._baseService.get(url.getAllConversation, params).subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllConversationList = res?.data?.data || res?.data;
          this.getAllConversationList.forEach((a: any) => {
            a.isUnreadMessage = false;
          });
          this.getLatestConversation(); // Socket Io for the Latest Conversation
          if (this.activeUser) {
            this.activeUser = this.getAllConversationList.find(
              (user: any) => user.id == this.activeUser.id
            );
          }
        }
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  /**
   * get Latest Conversation User Id
   */
  private getLatestConversation() {
    this._chatService.getConversation().subscribe({
      next: async (res: any) => {
        const index = this.getAllConversationList.findIndex((a: any) => {
          return a?.Messages[0]?.conversationId === res?.id;
        });

        if (index > -1) {
          this.getAllConversationList.splice(index, 1);
          if (this.activeUser?.id === res?.id) {
            res.unReadMessageCount = 0;
          }
          this.getAllConversationList.unshift(res);
        } else {
          res.isUnreadMessage = true;
          this.getAllConversationList.unshift(res);
        }
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  /**
   * quick replies data
   */
  private getQuickReplies() {
    this.loader.showLoader();

    this._baseService.get(url.getAllQuickRepliesForList, {}).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeQuickRepliesList = response.data;
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

  public sendQuickReplies(p: any) {
    this.loader.showLoader();
    let payload = {
      to: this.activeUser?.whatsappUser?.phoneNumber,
      quickReplyIds: this.selectedQuickReplies,
    };
    this._baseService.post(url.sendQuickReplies, payload).subscribe({
      next: (response) => {
        if (response?.success) {
          this.toastr.showToastMessage(response.message, 'success-style');
          this.getUserMessage(this.activeUser);
          this.selectedQuickReplies = [];
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
    p.close();
  }

  @ViewChild('componentRef', { read: SimplebarAngularComponent })
  componentRef!: SimplebarAngularComponent;

  scrollToBottom(): void {
    setTimeout(() => {
      const scrollElement = this.componentRef.SimpleBar.getScrollElement();
      scrollElement.scrollTo({
        top: scrollElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 0);
  }

  saveStarMessage(message: any, p: any) {
    console.log('message: ', message);
    this.loader.showLoader();
    let payload = {
      isStarred: message.isStarred ? false : true,
    };
    this._baseService
      .post(url.saveStartMessage + message.id, payload)
      .subscribe({
        next: (response) => {
          if (response?.success) {
            this.getUserMessage(this.activeUser);
            this.toastr.showToastMessage(response.message, 'success-style');
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
    p.close();
  }

  isStar: boolean = false;
  public filterStarMessage() {
    if (this.activeUser) {
      this.isStar = !this.isStar;
      this.getUserMessage(this.activeUser, this.isStar);
    }
  }

  addNewLabel(content: any) {
    this._modalService.open(content, { size: 'md', centered: true });
  }

  labelList: any = [];
  getLabelList() {
    this.loader.showLoader();
    this._baseService.get(url.getLabelList, {}).subscribe({
      next: (response) => {
        if (response?.success) {
          this.labelList = response.data;
          this.labelList.forEach((label: any) => {
            label.isSelected = this.activeUser.Labels?.some(
              (activeLabel: any) => activeLabel.id === label.id
            );
          });
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

  removeLabel(label: any) {
    this.loader.showLoader();
    label.isSelected = false;

    let payLoad = {
      labelId: label.id,
      conversationId: this.activeUser.id,
    };
    this._baseService.post(url.removeLabel, payLoad).subscribe({
      next: (response) => {
        if (response?.success) {
          this.toastr.showToastMessage(response.message, 'success-style');
          label.isSelected = false;
          this.getAllConversation();
        }
      },
      error: (error) => {
        label.isSelected = true; // Revert in case of error
        this.toastr.showToastMessage(error, 'error-style');
        return;
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  setLabel(label: any) {
    this.loader.showLoader();
    label.isSelected = true;

    let payLoad = {
      labelId: label.id,
      conversationId: this.activeUser.id,
    };
    this._baseService.post(url.setLabel, payLoad).subscribe({
      next: (response) => {
        if (response?.success) {
          this.toastr.showToastMessage(response.message, 'success-style');
          label.isSelected = true;
          this.getAllConversation();
        }
      },
      error: (error) => {
        label.isSelected = false;
        this.toastr.showToastMessage(error, 'error-style');
        return;
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  onLabelChange(){
    this.getAllConversation();
  }

  onActionChange(){
    this.getAllConversation();
  }

  actionMethod(){
    this.router.navigate(['/pages/actions', this.activeUser.id]);
  }

  getAllActions(): void {
    this.loader.showLoader();
    const params: any = {
      page: 1,
      perPage: 10,
      conversationId: 'b83b835f-13c9-499b-b35e-328821f01f6e',
    };
   
    this._baseService.get(url.getAllAction, params).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeActions = response?.data?.actions;
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
}
