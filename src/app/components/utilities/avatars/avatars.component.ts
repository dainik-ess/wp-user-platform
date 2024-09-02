import { Component } from '@angular/core';
import * as codeData from '../../../shared/prismData/avatars';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent {
  
  
}
