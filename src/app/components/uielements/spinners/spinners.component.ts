import { Component } from '@angular/core';
import * as codeData from '../../../shared/prismData/spinners';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-spinners',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent {
  
}
