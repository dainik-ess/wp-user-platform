import { Component } from '@angular/core';
import * as codeData from '../../../shared/prismData/tooltips';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent {
 
}
