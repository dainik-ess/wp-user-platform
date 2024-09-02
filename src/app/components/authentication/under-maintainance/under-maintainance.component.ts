import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-under-maintainance',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './under-maintainance.component.html',
  styleUrls: ['./under-maintainance.component.scss']
})
export class UnderMaintainanceComponent {
  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;

  ngOnInit(): void {
    const countDown = new Date('Dec 1, 2024 00:00:00').getTime();
    const time = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(time);
      }
    }, 1000);
  }
}
