import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgToggleModule } from 'ng-toggle-button';
@Component({
  selector: 'app-checksradios',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,NgbModule,CommonModule,NgToggleModule],
  templateUrl: './checksradios.component.html',
  styleUrl: './checksradios.component.scss'
})
export class ChecksradiosComponent {
  
  toggles = [
    { class: 'toggle radio-first' },
    { class: 'toggle toggle-secondary' },
    { class: 'toggle toggle-warning' },
    { class: 'toggle toggle-info' },
    { class: 'toggle toggle-success' },
    { class: 'toggle toggle-danger' },
    { class: 'toggle toggle-light' },
    { class: 'toggle toggle-dark' },
    // Add more toggles as needed
  ];

  statuses: boolean[] = Array(this.toggles.length).fill(true);

  clickEvent(index: number) {
    document.querySelector(`.${this.toggles[index].class}`)?.classList.toggle('on');
    this.statuses[index] = !this.statuses[index];
  }
  toggleSwitches = [
    { label: 'Small size toggle switch', code: 'toggle-sm', status: true },
    { label: 'Default toggle switch', code: 'toggle', status: true,bg:'toggle-secondary ' },
    { label: 'Large size toggle switch', code: 'toggle-lg', status: true,bg:'toggle-success'},
    // Add more toggle switches as needed
  ];

  clickEvent1(toggle: { label: string; code: string; status: boolean; }) {
    const toggleClass = toggle.code ? `toggle ${toggle.code}` : 'toggle';
    document.querySelector(`.${toggleClass}`)?.classList.toggle('on');
    toggle.status = !toggle.status;
  }
}