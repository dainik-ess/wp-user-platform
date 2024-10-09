import { Component } from '@angular/core';
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

  shortAnswers: any[] = [];
  textContents: any[] = [];
  dropdownContent: any[] = [];
  dropdownOptions: any[] = [{ id: 1, title: '' }];

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
   * short Answer Content add
   */
  textContentMethod() {
    this.textContents.push({
      id: this.shortAnswers.length + 1,
      text: '',
    });
  }

  /**
   * short answer content remove
   */
  textContentRemoveMethod(index: number) {
    this.textContents.splice(index, 1);
  }

  /**
   * Dropdown Content add
   */
  dropdownContentMethod() {
    this.dropdownContent.push({
      id: this.shortAnswers.length + 1,
    });
  }

  /**
   * Dropdown content remove
   */
  dropdownContentRemoveMethod(index: number) {
    this.dropdownContent.splice(index, 1);
  }

  /**
   * dropdownOptions
   */
  dropdownOptionsMethod() {
    this.dropdownOptions.push({
      id: this.dropdownOptions.length + 1,
      title: '',
    });
  }

  /**
   * dropdown options remove
   */
  dropdownOptionsRemoveMethod(index: number) {
    this.dropdownOptions.splice(index, 1);
  }
}
