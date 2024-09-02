import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-floating-labels',
  standalone: true,
  imports: [SharedModule,NgSelectModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './floating-labels.component.html',
  styleUrl: './floating-labels.component.scss'
})
export class FloatingLabelsComponent {

}
