import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule,NgbModule,RouterModule,NgxSliderModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b></b> $" + value;
        case LabelType.High:
          return "<b></b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
}
