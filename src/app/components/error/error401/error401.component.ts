import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-error401',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.scss']
})
export class Error401Component {
  constructor(private router: Router) {}
  
  navigateToAnotherComponent() {
    this.router.navigate(['/crm']);
  }
}
