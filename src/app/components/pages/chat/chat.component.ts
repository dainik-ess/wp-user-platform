import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModal, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CHAT } from './chat.constant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { BaseService } from '../../../shared/services/base.service';
import { url } from '../../../app.router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    SharedModule,
    SimplebarAngularModule,
    NgbNavModule,
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('chatuserdetails') chatuserdetails!: ElementRef;

  RecentData = CHAT;
  tempUserData = CHAT;

  getAllConversationList: any;
  userMessage:any;

  activeUser = this.RecentData[0];

  searchUser: string | null = null;

  constructor(
    public elementRef: ElementRef,
    private toastr: ToastService,
    private loader: LoaderService,
    private _baseService: BaseService
  ) {}

  ngOnInit(): void {
    this.getAllConversation();
  }

  Bodyclick() {
    document.querySelector('#chat-user-details')?.classList.remove('open');
  }
  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document
        .querySelector('.main-chart-wrapper ')
        ?.classList.add('responsive-chat-open');
    }
  }

  detailsclick() {
    document.querySelector('.chat-user-details ')?.classList.add('open');
  }

  removedetails() {
    document.querySelector('.chat-user-details ')?.classList.remove('open');
  }
  removedetails1() {
    document
      .querySelector('.main-chart-wrapper ')
      ?.classList.remove('responsive-chat-open');
  }

  searchUserMethod() {
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

  private getAllConversation() {
    this.loader.showLoader();
    this._baseService.get(url.getAllConversation, {}).subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllConversationList = res?.data?.data || res?.data;
          
          this.getUserMessage(this.getAllConversationList[0])
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

  public getUserMessage(user:any) {
    this.loader.showLoader();
    let payload = {
      conversationId : user.id,
      page : 1,
    }
    this._baseService.get(url.getSingleConversation, payload).subscribe({
      next: (res: any) => {
        if (res) {
          this.userMessage = {
           message : res?.data?.data || res?.data
          };
          this.userMessage = {user,...this.userMessage}
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
