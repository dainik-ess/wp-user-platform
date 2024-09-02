import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { Editor, NgxEditorModule, Toolbar ,Validators} from 'ngx-editor';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import jsonDoc from '../../../../shared/data/editor';


@Component({
  selector: 'app-quill-editor',
  standalone: true,
  imports: [SharedModule,AngularEditorModule,HttpClientModule,FormsModule,ReactiveFormsModule,NgxEditorModule],
  templateUrl: './quill-editor.component.html',
  styleUrl: './quill-editor.component.scss'
})
export class QuillEditorComponent {
  htmlContent:string = `<h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <p><br></p>
  <ol>
      <li class="ql-size-normal">Write text select and edit with multiple options.</li>
      <li class="">This is quill snow editor.</li>
      <li class="">Easy to customize and flexible.</li>
  </ol>
  <p><br></p>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>`;

  editordoc = jsonDoc;
  

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

	openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}
}
