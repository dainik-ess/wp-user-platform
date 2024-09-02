import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [NgbModule,SharedModule],
  templateUrl: './scrollspy.component.html',
  styleUrl: './scrollspy.component.scss'
})
export class ScrollspyComponent {

}
