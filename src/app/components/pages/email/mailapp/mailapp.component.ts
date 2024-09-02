import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModal, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mailapp',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule,AngularEditorModule,ReactiveFormsModule,FormsModule,SimplebarAngularModule,HttpClientModule,NgbTooltipModule],
  templateUrl: './mailapp.component.html',
  styleUrl: './mailapp.component.scss'
})
export class MailappComponent {
  htmlContent:string = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...', 
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  closeResult!: string;

	constructor(private modalService: NgbModal) {}
  openWindowCustomClass(content: any) {
		this.modalService.open(content, {  size: 'lg' });
	}
  
  selectedCars = [3];
  cars = [
      { id: 1, name: 'Jay@gmail.com' },
      { id: 2, name: 'Kimo@gmail.com' },
      { id: 3, name: 'Don@gmail.com' },
      { id: 4, name: 'kimo@gmail.com' },
  ];

  ngOnInit() {
    if (window.innerWidth <= 992) {
      document.querySelector('.mail-navigation.mail-navigation')?.classList.add('d-none');
      document.querySelector('.total-mails')?.classList.add('d-block');
    }
  }

  toggleDisabled() {
      const car: any = this.cars[1];
      car.disabled = !car.disabled;
  }

  htmlContent1:string = ``;

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...', 
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  MailClick() {
    document.querySelector('.total-mails')?.classList.remove('d-block');
    document.querySelector('.mails-information')?.classList.add('d-block');
  }

  RemoveClick(){
    document.querySelector('.total-mails')?.classList.add('d-block');
    document.querySelector('.mails-information')?.classList.add('d-none');
  }

  closeClick(){
    document.querySelector('.mail-navigation')?.classList.remove('d-none');
  }

  // toggleFullscreen() {
  //   this.isFullscreen = !this.isFullscreen;
  // }
}
