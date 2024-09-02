import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { SharedModule } from '../../../../shared/shared.module';
import { NouisliderModule } from 'ng2-nouislider';
import * as noUiSlider from 'nouislider';
interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}

interface SimpleSliderModel {
  value5: number;
  options6: Options;
}

@Component({
  selector: 'app-rangeslider',
  standalone: true,
  imports: [SharedModule,NgxSliderModule,FormsModule,ReactiveFormsModule,NgxSliderModule,NouisliderModule],
  templateUrl: './rangeslider.component.html',
  styleUrl: './rangeslider.component.scss'
})
export class RangesliderComponent {
  public disabled: boolean = false;
  public someRange: number[] = [0, 7];
  public someRange1: number[] = [3, 7];
  public someRange2: number[] = [4];
  public someRange3: number[] = [3];
  public someRange4: number[] = [4, 8];
  public someRange5: number[] = [4, 8];
  public someRange6: number[] = [4, 7];

  public someMin: number = -10;
  public someValue: number = 5;
  public someMax: number = 10;
  public someStep: number = 1;
  public form1: FormGroup | any;
  public form2: FormGroup | any;
  public form3: FormGroup | any;

  red = 0;
  green = 0;
  blue = 0;

  getColor(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.form1 = this.formBuilder.group({
      single: [10, Validators.required], // Example validator, change as needed
    });

    this.form2 = this.formBuilder.group({
      single: [8, Validators.min(0)], // Another example validator
    });

    this.form3 = this.formBuilder.group({
      single: [0, [Validators.min(0), Validators.max(4)]], // Multiple validators
    });
  }
  onChange(value: any) {
    // console.log('Value changed to', value);
  }

  value = 40;
  value1 = 60;
  value2 = 4;
  value3 = 8;

  options2: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
  };
  options3: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBarEnd: true,
  };
  value4: number = 12;
  options5: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
        return 'red';
      }
      if (value <= 6) {
        return 'orange';
      }
      if (value <= 9) {
        return 'yellow';
      }
      return '#2AE02A';
    },
  };
  verticalSlider1: SimpleSliderModel = {
    value5: 5,
    options6: {
      floor: 0,
      ceil: 5,
      vertical: true,
    },
  };

  public someKeyboard: number[] = [3];
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10, // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
  };

  public keyupLabelOn: boolean = false;
  public keydownLabelOn: boolean = false;
  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }

  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }

  public someKeyboard2: number[] = [1, 3];
  public someKeyboardConfig2: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    step: 0.1,
    range: {
      min: 0,
      max: 5,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true,
    },
    keyboard: true,
  };

  minValue: number = 10;
  maxValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true,
  };
  minValue1: number = 10;
  maxValue1: number = 90;

  minValue2: number = 50;
  maxValue2: number = 90;

  minValue3: number = 50;
  maxValue3: number = 90;
  options4: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true,
  };

  minValue6 = 15;
  maxValue6 = 85;
  options6: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#60a5fa',
      to: '#60a5fa',
    },
  };
  minValue7 = 15;
  maxValue7 = 85;
  options7: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#eab308',
      to: '#eab308',
    },
  };
  minValue8 = 15;
  maxValue8 = 85;
  options8: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#4c75cf',
      to: '#4c75cf',
    },
  };
  minValue9 = 15;
  maxValue9 = 85;
  options9: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#22c55e',
      to: '#22c55e',
    },
  };
  minValue10 = 15;
  maxValue10 = 85;
  options10: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f43f5e',
      to: '#f43f5e',
    },
  };
  minValue11 = 15;
  options11: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#5a66f1',
      to: '#5a66f1',
    },
  };

  minValue12 = 20;
  maxValue12 = 60;
  options12: Options = {
    ceil: 50,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#f43f5e',
      to: '#f43f5e',
    },
  };

  sliderConfig: any;
  sliderModel: number[] = [127, 127, 127];

  updateColor() {
    const color = `rgb(${this.sliderModel[0]}, ${this.sliderModel[1]}, ${this.sliderModel[2]})`;
    // You can update the resultElement in the way you want (e.g., using Angular Renderer2).
  }
}

