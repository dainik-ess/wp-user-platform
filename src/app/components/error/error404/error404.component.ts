import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {
  constructor(private router: Router) {}
  navigateToAnotherComponent() {
    this.router.navigate(['/crm']);
  }
}
