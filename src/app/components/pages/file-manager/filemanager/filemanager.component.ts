import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filemanager',
  standalone: true,
  imports: [SharedModule, SimplebarAngularModule, NgbModule],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.scss'
})
export class FilemanagerComponent {
  closeResult!: string;

	constructor(private modalService: NgbModal) {}

 
	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal',centered: true });
	}
  openWindowCustomClass1(content1: any) {
		this.modalService.open(content1, { windowClass: 'dark-modal',centered: true });
	}

 
  removedetails1() {
    document.querySelector('.selected-file-details ')?.classList.remove('open');
  }
  
  removeclick(){
    document.querySelector('.file-manager-folders')?.classList.remove('open');
    document.querySelector('.file-manager-navigation')?.classList.remove('close');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.myFileClick();
    this.detailsClick(); 
  }

  myFileClick() {
    const fileManagerFolders = document.querySelector('.file-manager-folders');
    const fileManagerNavigation = document.querySelector('.file-manager-navigation');

    if (window.innerWidth <= 992) {
      if (fileManagerFolders) {
        fileManagerFolders.classList.add('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.add('close');
      }
    } else {
      if (fileManagerFolders) {
        fileManagerFolders.classList.remove('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.remove('close');
      }
    }
  }

  detailsClick() {
    const selectedFileDetails = document.querySelector('.selected-file-details');

    if (window.innerWidth <= 1180 && selectedFileDetails) {
      selectedFileDetails.classList.add('open');
    } else {
      // Close the details when the window width is greater than 992
      if (selectedFileDetails) {
        selectedFileDetails.classList.remove('open');
      }
  }
  }

}