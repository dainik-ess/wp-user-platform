import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {

}
