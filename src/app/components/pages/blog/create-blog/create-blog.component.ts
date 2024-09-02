import { Component, ViewChild } from '@angular/core';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { SharedModule } from '../../../../shared/shared.module';
import { Time } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [SharedModule, AngularEditorModule, FormsModule, ReactiveFormsModule, FlatpickrModule, FilePondModule, NgSelectModule, HttpClientModule],
  providers:[FlatpickrDefaults],
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'] 
})
export class CreateBlogComponent {
  
  selecteddate: Date | null = null;

  selectedTime: Time | null = null;

  //First Selelct
  selectedSimpleItem = 'Select Category';
  simpleItems: any = [];
  // second Select
  selectedSimpleItem1 = 'Select';
  simpleItems1: any = [];
  //Select 3
  selectedBlogs = ['Landscape', 'Top Blog'];
  Blogs = [
    { id: 1, name: 'Adventure' },
    { id: 2, name: 'Blogger' },
  ];

  ngOnInit(): void {
    this.simpleItems = ['Beauty', 'Fashion', 'Food', 'Nature', 'Sports'];
    this.simpleItems1 = ['Hold', 'Published'];
  }
  toggleDisabled() {
    const Blog: any = this.Blogs[1];
    Blog.disabled = !Blog.disabled;
  }
  htmlContent: string = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  @ViewChild('myPond') myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here to Upload...',
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here to Upload...',
  };

  pondFiles: FilePond.FilePondOptions['files'] = [
    {
      source: 'assets/photo.jpeg',
      options: {
        type: 'local',
      },
    },
  ];

  pondHandleInit() {
    // console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log("A file was added", event);
  }

  pondHandleActivateFile(event: any) {
    // console.log("A file was activated", event);
  }
}
