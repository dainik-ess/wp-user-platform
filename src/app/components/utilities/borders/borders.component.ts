import { Component } from '@angular/core';
import * as codeData from '../../../shared/prismData/borders';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-borders',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.scss']
})
export class BordersComponent {
 
}
