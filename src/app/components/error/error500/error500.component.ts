import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-error500',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss']
})
export class Error500Component {
  constructor(private router: Router) {}
  navigateToAnotherComponent() {
    this.router.navigate(['/crm']);
  }
}
