import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ynex-v17';
  public isSpinner = true;
  constructor(
    private _authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    const isToken = this._authService.getToken();

    if (isToken) this.router.navigate(['/crm']);
    else this.router.navigate(['/']);
  }
}
