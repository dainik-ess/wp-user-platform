import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [SharedModule,NgbPopoverModule],
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss']
})
export class PopoversComponent {

}
