import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { NgbAccordionModule, NgbDropdownModule, } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flow-modal',
  standalone: true,
  imports: [MatDialogClose,MatDialogActions,MatIcon,MatDialogContent,NgbAccordionModule,NgbDropdownModule],
  templateUrl: './flow-modal.component.html',
  styleUrl: './flow-modal.component.scss'
})
export class FlowModalComponent {

}
