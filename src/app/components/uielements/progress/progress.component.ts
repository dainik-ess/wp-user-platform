import { Component } from '@angular/core';
import * as codeData from '../../../shared/prismData/progress';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule,NgbModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  
}
