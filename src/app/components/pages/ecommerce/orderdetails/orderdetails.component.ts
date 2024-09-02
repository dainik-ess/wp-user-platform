import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orderdetails',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent {
  files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
}
