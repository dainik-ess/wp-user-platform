import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneComponent, DropzoneDirective, DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-create-nft',
  standalone: true,
  imports: [SharedModule,DropzoneModule,NgSelectModule,FormsModule,NgxDropzoneModule],
  templateUrl: './create-nft.component.html',
  styleUrl: './create-nft.component.scss'
})
export class CreateNftComponent {

  files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  
  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  
  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  constructor() {}

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleAutoReset(): void {
    this.config.autoReset = this.config.autoReset ? null : 5000;
    this.config.errorReset = this.config.errorReset ? null : 5000;
    this.config.cancelReset = this.config.cancelReset ? null : 5000;
  }

  public toggleMultiUpload(): void {
    this.config.maxFiles = this.config.maxFiles ? 0 : 1;
  }

  public toggleClickAction(): void {
    this.config.clickable = !this.config.clickable;
  }

  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }
  selectedSimpleItem='Choose Royalities';
  simpleItems:any=[];
  ngOnInit(): void {
    this.simpleItems=['Flat Royalty','Graduated Royalty','Tiered Royalty','ime-Limited Royalty','Customized Royalty']
   
  }
}



