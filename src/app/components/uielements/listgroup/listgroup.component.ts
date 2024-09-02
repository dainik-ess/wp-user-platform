import { Component } from '@angular/core';
import * as codeData from '../../../shared/prismData/listgroup';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-listgroup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent {
}