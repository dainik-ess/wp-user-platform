import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mailsettings',
  standalone: true,
  imports: [SharedModule, NgSelectModule, FormsModule, ReactiveFormsModule, NgbNavModule, NgSelectModule, NgbModule],
  templateUrl: './mailsettings.component.html',
  styleUrl: './mailsettings.component.scss'
})
export class MailsettingsComponent {
  selectedSimpleItem = 'Dubai';
  simpleItems: any = [];
  //select 2
  selectedSimpleItem1 = '3 Attempts';
  simpleItems1: any = [];
  // select 3
  selectedSimpleItem2 = '1 Hour';
  simpleItems2: any = [];
  //select 4
  selectedSimpleItem3 = '10';
  simpleItems3: any = [];

  selectedLanguage = ['English','French'];
  Languages = [
    { id: 1, name: 'Arabic' },
    { id: 2, name: 'French' },
    { id: 3, name: 'Hindi' },
  ];
  toggleDisabled() {
    const Language: any = this.Languages[1];
    Language.disabled = !Language.disabled;
  }
  
  ngOnInit() {
    this.simpleItems = ['Australia', 'Dubai', 'USA'];
    this.simpleItems1 = [
      '3 Attempts',
      '5 Attempts',
      '10 Attempts',
      '20 Attempt',
    ];
    this.simpleItems2 = ['1 Hour', '1 Day', '1 Month', '1 year'];
    this.simpleItems3 = ['10', '50', '100', '200'];
  }

  url1: string = ''; // Assuming url1 is a property in your component

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
