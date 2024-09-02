import { Component } from '@angular/core';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-market-place',
  standalone: true,
  imports: [SharedModule,NgbNavModule,NgbModule],
  templateUrl: './market-place.component.html',
  styleUrl: './market-place.component.scss'
})
export class MarketPlaceComponent {

}
