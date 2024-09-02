import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SharedModule,SimplebarAngularModule,NgSelectModule,NgbModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  closeResult!: string;

	constructor(private modalService: NgbModal) {}

  
  openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal',centered:true });

  }
    openWindowCustomClass1(content1: any) {
		this.modalService.open(content1, { windowClass: 'dark-modal',centered:true });
	}
  openWindowCustomClass2(content3: any) {
		this.modalService.open(content3, { windowClass: 'dark-modal',centered:true });
	}
  openWindowCustomClass3(content4: any) {
		this.modalService.open(content4, { windowClass: 'dark-modal',centered:true });
	}
}
