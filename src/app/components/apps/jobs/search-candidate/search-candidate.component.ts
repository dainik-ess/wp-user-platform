import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-search-candidate',
  standalone: true,
  imports: [SharedModule,NgbModule,NgSelectModule,FormsModule,NgxSliderModule,RouterModule],
  templateUrl: './search-candidate.component.html',
  styleUrl: './search-candidate.component.scss'
})
export class SearchCandidateComponent {
// Select 1
selectedSimpleItem=' All Categories';
simpleItems:any=[];

//Select 2
selectedSimpleItem1='Freshers';
simpleItems1:any=[];

ngOnInit(): void {
  this.simpleItems=['All Categories','Angilar Developer','IT Hard Ware','Network Engineer','React Developer']
  this.simpleItems1=['Freshers','1Year Exp','2Year Exp','3Year Exp','4Year Exp','5Year Exp']
  
}
public isCollapsed = true;
public isCollapsed1 = true;

minValue: number = 100;
maxValue: number = 400;
options: Options = {
  floor: 0,
  ceil: 500,
  translate: (value: number, label: LabelType): string => {
    switch (label) {
      case LabelType.Low:
        return "$" + value;
      case LabelType.High:
        return "$" + value;
      default:
        return "$" + value;
    }
  }
};
data = [ {
  
}]
}
