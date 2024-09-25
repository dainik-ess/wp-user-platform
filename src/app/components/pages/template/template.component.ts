import { Component, ViewChild } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [MatStepperModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  @ViewChild('stepper') stepper!: MatStepper;

}
