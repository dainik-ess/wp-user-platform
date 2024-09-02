import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-live-auction',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './live-auction.component.html',
  styleUrl: './live-auction.component.scss'
})
export class LiveAuctionComponent {

}
