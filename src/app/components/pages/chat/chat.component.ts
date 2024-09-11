import { Component, ElementRef, ViewChild } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModal, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CHAT } from './chat.constant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @ViewChild('chatuserdetails') chatuserdetails!: ElementRef;

  RecentData = CHAT;
  tempUserData = CHAT;

  activeUser = this.RecentData[0];

  searchUser: string | null = null;

  constructor(public elementRef: ElementRef) {}

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

  ngOninit() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
    }
    
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

}
