import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [SharedModule,NgbNavModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

}
