import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

}
