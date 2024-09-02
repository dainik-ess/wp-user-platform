import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [SharedModule,NgbModule,FormsModule,ReactiveFormsModule,NgbAccordionModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.scss'
})

export class AccordionsComponent {
  panels = ['Accordion Item #1', 'Accordion Item #2', 'Accordion Item #3'];
  isCollapsed: any = true;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;
  isCollapsed3: any = true;
  isHorizontalCollapsed: boolean = true;
  constructor() {}

  toggleCollapse(id: string) {
    if (this.isCollapsed[id] === undefined) {
      this.isCollapsed[id] = true;
    } else {
      this.isCollapsed[id] = !this.isCollapsed[id];
    }
  }
  
  toggleHorizontalCollapse() {
    this.isHorizontalCollapsed = !this.isHorizontalCollapsed;
  }

  ngOnInit(): void {}

  public isFirstGradient = false;
  public isSecondGradient = false;

  FirstGradient() {
    this.isFirstGradient = !this.isFirstGradient;
    if (this.isFirstGradient == true) {
      document.querySelector('.firstgradient')?.classList.remove('collapsed');
    } else {
      document.querySelector('.firstgradient')?.classList.add('collapsed');
    }
  }
  SecondGradient() {
    this.isSecondGradient = !this.isSecondGradient;
    if (this.isSecondGradient == true) {
      document.querySelector('.secondgradient')?.classList.remove('collapsed');
    } else {
      document.querySelector('.secondgradient')?.classList.add('collapsed');
    }
  }
}
