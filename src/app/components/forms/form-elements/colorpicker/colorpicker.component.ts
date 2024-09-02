import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule,ColorPickerService  } from 'ngx-color-picker';
import { NgxColorsModule, validColorValidator } from 'ngx-colors';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';


@Component({
  selector: 'app-colorpicker',
  standalone: true,
  imports: [SharedModule, MaterialModuleModule, ColorPickerModule, FormsModule, ReactiveFormsModule, NgxColorsModule],
  providers:[ColorPickerService],
  templateUrl: './colorpicker.component.html',
  styleUrl: './colorpicker.component.scss'
})
export class ColorpickerComponent {
  constructor() {}
  
  public color1 = `#a68e5e`;

  public exampleForm: FormGroup = new FormGroup(
    {
      inputCtrl: new FormControl("rgb(79, 195, 255)", validColorValidator()),
      pickerCtrl: new FormControl("rgb(79, 195, 255)"),
    },
    { updateOn: "change" }
  );

  ngOnInit(): void {
    this.exampleForm.controls["inputCtrl"].valueChanges.subscribe((color) => {
      if (this.exampleForm.controls["pickerCtrl"].valid) {
        this.exampleForm.controls["pickerCtrl"].setValue(color, {
          emitEvent: false,
        });
      }
    });
    this.exampleForm.controls["pickerCtrl"].valueChanges.subscribe((color) =>
      this.exampleForm.controls["inputCtrl"].setValue(color, {
        emitEvent: false,
      })
    );
  }

 color:string = '#EC407A';
 color2:string = '#EC407B';

}