import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  NgbAccordionModule,
  NgbDropdownModule,
  NgbPopoverModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flow-modal',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatIcon,
    MatDialogContent,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbPopoverModule,
    NgbTooltipModule,
    MatSlideToggleModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './flow-modal.component.html',
  styleUrl: './flow-modal.component.scss',
})
export class FlowModalComponent {
  openPopover(popover: any) {
    popover.open();
  }

  closePopover(popover: any) {
    popover.close();
  }
  screenTitle: any = 'Screen Title';
  headingTitle: any[] = [];
  bodyTitle: any[] = [];
  shortAnswers: any[] = [];
  textContents: any[] = [];
  heading: any[] = [];
  body: any[] = [];
  singleChoiceContent: any[] = [];
  multiChoiceContent: any[] = [];
  dropdownOptions: any[] = [{ id: 1, title: '' }];
  multipleChoiceOptions: any[] = [{ id: 1, title: '' }];

  multipleChoiceLabel: any = "Multiple  Choice Dropdown";
  // singleChoiceLabel: any = "Single Choice Options";
  singleChoiceLabel: any[] = [];
  multiChoiceLabel: any[] = [];

  /**
   * short Answer Content add
   */
  shortAnswerMethod() {
    this.shortAnswers.push({
      id: this.shortAnswers.length + 1,
      title: '',
      instructions: '',
    });
  }

  /**
   * short answer content remove
   */
  shortAnswerRemoveMethod(index: number) {
    this.shortAnswers.splice(index, 1);
  }

  /**
   * heading Content add
   */
  headingContentMethod() {
    this.heading.push({
      id: this.shortAnswers.length + 1,
      text: '',
    });
  }

  /**
   * heading content remove
   */
  headingContentRemoveMethod(index: number) {
    this.heading.splice(index, 1);
    this.headingTitle.splice(index, 1);
  }

  /**
   * body Content add
   */
  bodyContentMethod() {
    this.body.push({
      id: this.shortAnswers.length + 1,
      text: '',
    });
  }

  /**
   * heading content remove
   */
  bodyContentRemoveMethod(index: number) {
    this.body.splice(index, 1);
    this.bodyTitle.splice(index, 1);
  }

  singleChoiceChange() {}


  /**
     * Single Choice Content add
     */
  singleChoiceContentMethod() {
    this.singleChoiceContent.push({
      id: this.singleChoiceContent.length + 1,
      label: '',  // Store the label here
      options: [{ id: 1, title: '' }]  // Store options for this label
    });
  }

  /**
   * Single Choice content remove
   */
  singleChoiceContentRemoveMethod(index: number) {
    this.singleChoiceContent.splice(index, 1);
  }

  /**
   * Add a new option to a specific single choice label
   */
  dropdownOptionsMethod(index: number) {
    this.singleChoiceContent[index].options.push({
      id: this.singleChoiceContent[index].options.length + 1,
      title: ''
    });
  }

  /**
   * Remove a specific option from a single choice label
   */
  dropdownOptionsRemoveMethod(labelIndex: number, optionIndex: number) {
    this.singleChoiceContent[labelIndex].options.splice(optionIndex, 1);
  }



  /*************************************
   * Multi Choice Method
   ************************************/

  /**
     * Single Choice Content add
     */
  multiChoiceContentMethod() {
    this.multiChoiceContent.push({
      id: this.multiChoiceContent.length + 1,
      label: '',  // Store the label here
      options: [{ id: 1, title: '' }]  // Store options for this label
    });
  }

  /**
   * Single Choice content remove
   */
  multiChoiceContentRemoveMethod(index: number) {
    this.multiChoiceContent.splice(index, 1);
  }

  /**
   * Add a new option to a specific single choice label
   */
  multiDropdownOptionsMethod(index: number) {
    this.multiChoiceContent[index].options.push({
      id: this.multiChoiceContent[index].options.length + 1,
      title: ''
    });
  }

  /**
   * Remove a specific option from a single choice label
   */
  multiDropdownOptionsRemoveMethod(labelIndex: number, optionIndex: number) {
    this.multiChoiceContent[labelIndex].options.splice(optionIndex, 1);
  }


  public flowSave() {

    
  } 


}
