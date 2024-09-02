import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { SharedModule } from '../../../shared/shared.module';
import { interval } from 'rxjs';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [SharedModule,CountUpModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  
  public counter1 = 1;
  source = interval(0.2);
  subscribe = this.source.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 137) {
      this.subscribe.unsubscribe();
    }
  });
  public counter2 = 1;
  source2 = interval(0.2);
  subscribe2 = this.source2.subscribe(() => {
    this.counter2++;
    if (this.counter2 == 2501) {
      this.subscribe2.unsubscribe();
    }
  });
}
