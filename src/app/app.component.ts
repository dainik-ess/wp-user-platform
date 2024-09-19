import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerModule],
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

    if (isToken) this.router.navigate(['/pages/ecommerce/products']);
    else this.router.navigate(['/']);
  }
}
