import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../../shared/shared.module';
import {
  NgbModal,
  NgbModule,
  NgbNavModule,
  NgbPopoverModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CHAT } from './chat.constant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChatService } from './service/chat.service';

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
    CommonModule,
    InfiniteScrollModule,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('chatuserdetails') chatuserdetails!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  RecentData = CHAT;
  tempUserData = CHAT;

  getAllConversationList: any;
  userMessage: any;

  activeUser:any = this.RecentData[0];

  searchUser: string | null = null;
  pageIndex: number = 1;
  message: string = '';

  file: File | null = null;
  showPreview: boolean = false;
  filePreview: any = null;
  fileType: string = '';
  chatType: string = 'message';
  fileAccept: string = '';

  constructor(
    public elementRef: ElementRef,
    private toastr: ToastService,
    private loader: LoaderService,
    private _baseService: BaseService,
    private _chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.getAllConversation();
    this.getAllMessage();
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
    if (!this.searchUser) {
      // If no search query is entered, reset to the full list
      this.RecentData = this.tempUserData;
      return;
    }

    const query = this.searchUser.toLowerCase();

    this.RecentData = this.tempUserData.filter((user: any) =>
      user.name.toLowerCase().includes(query)
    );
  }

  public getUserMessage(user: any) {
    this.loader.showLoader();
    let payload = {
      conversationId: user.id,
      page: this.pageIndex,
    };
    this._baseService.get(url.getSingleConversation, payload).subscribe({
      next: async (res: any) => {
        if (res) {
          this.userMessage = {
            message: (res?.data?.data || res?.data).slice().reverse(),
          };
          this._chatService.joinRoom(res?.data?.data[0].conversationId);
          this.userMessage = { user, ...this.userMessage };
          
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
    if (!this.message.trim() && !this.file) {
      this.toastr.showToastMessage(
        'Please enter a message or select a file to send.',
        'warning-style'
      );
      return;
    }
    this.loader.showLoader();
    const formData = new FormData();
    formData.append('to', this.userMessage?.user?.whatsappUser?.phoneNumber);

    if (this.chatType == 'image') {
      this.chatType = 'image';
    } else if (this.chatType == 'video') {
      this.chatType = 'video';
    } else if (this.chatType == 'chatType') {
      this.chatType = 'chatType';
    } else {
      this.chatType = 'text';
    }

    formData.append('type', this.chatType);

    if (this.message) {
      formData.append('message', this.message);
    }

    if (this.file) {
      formData.append('file', this.file, this.file.name);
    }

    this._baseService.post(url.sendMessage, formData).subscribe({
      next: (res: any) => {
        if (res) {
          this.message = ''; // Clear message input
          this.file = null; // Reset file after sending
        }
        this.getAllConversation();
        this.getAllMessage();
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

  public handleFileUpload(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreview = e.target.result;
        this.fileType = this.file?.type.includes('image') ? 'image' : 'pdf';
        this.showPreview = true;
      };
      reader.readAsDataURL(this.file);
    }
  }

  public closePreview() {
    this.showPreview = false;
    this.filePreview = null;
    this.fileType = '';
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
        this.userMessage = {
          message: res.slice().reverse(),
        };
        this._chatService.joinRoom(res?.data?.data[0].conversationId);
        this.userMessage = {...this.userMessage };
      }
    });
  }

  private getAllConversation() {
    this.loader.showLoader();
    this._baseService.get(url.getAllConversation, {}).subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllConversationList = res?.data?.data || res?.data;

          this.getUserMessage(this.getAllConversationList[0]);
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
}
