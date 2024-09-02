import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { NgbAlert, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Alert {
  type: string;
  message: string;
}

interface SolidAlert {
  type: string;
  message: string;
  bg:string;
}
interface OutlineAlert {
  type: string;
  message: string;
  bg:string;
}


export interface Alert1 {
  type: string;
  icon: string; // Make sure 'icon' property is defined
  message: string;
}
const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];

const solidRoundedALERTS: Alert[] = [
  {
    type: 'solid-primary',
    message: '  A simple solid rounded primary alert—check it out!',
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid rounded secondary alert—check it out!',
  },
  {
    type: 'solid-warning',
    message: '  A simple solid rounded warning alert—check it out!',
  },
  {
    type: 'solid-danger',
    message: 'A simple solid rounded danger alert—check it out!',
  },
];
const solidALERTS: SolidAlert[] = [
  {
    type: 'solid-primary',
    message: ' A simple solid primary alert—check it out!',
    bg:''
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid secondary alert—check it out!',
    bg:''
  },
  {
    type: 'solid-info',
    message: 'A simple solid info alert—check it out!',
    bg:''
  },
  {
    type: 'solid-warning',
    message: 'A simple solid warning alert—check it out!',
    bg:''
  },
  {
    type: 'solid-success',
    message: 'A simple solid success alert—check it out!',
    bg:''
  },
  {
    type: 'solid-danger',
    message: 'A simple solid danger alert—check it out!',
    bg:''
  },
  {
    type: 'solid-light',
    message: 'A simple solid light alert—check it out!',
    bg:'text-dark'
  },
  {
    type: 'solid-dark',
    message: 'A simple solid dark alert—check it out!',
    bg:'text-white'
  },
];
const outlineALERTS: OutlineAlert[] = [
  {
    type: 'outline-primary',
    message: 'A simple outline primary alert—check it out!',
    bg:''
  },
  {
    type: 'outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
    bg:''
  },
  {
    type: 'outline-info',
    message: 'A simple outline info alert—check it out!',
    bg:''
  },
  {
    type: 'outline-warning',
    message: 'A simple outline warning alert—check it out!',
    bg:''
  },
  {
    type: 'outline-success',
    message: 'A simple outline success alert—check it out!',
    bg:''
  },
  {
    type: 'outline-danger',
    message: 'A simple outline danger alert—check it out!',
    bg:''
  },
  {
    type: 'outline-light',
    message: 'A simple outline light alert—check it out!',
    bg:'text-dark'
  },
  {
    type: 'outline-dark',
    message: 'A simple outline dark alert—check it out!',
    bg:'text-dark'
  },
];
const solidShadowsALERTS: Alert[] = [
  {
    type: 'solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-primary',
    message: 'A simple solid primary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid secondary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-secondary',
    message: ' A simple solid secondary alert with normal shadow—check it out!',
  },
  {
    type: 'solid-secondary',
    message: 'A simple solid secondary alert with normal shadow—check it out!',
  },
];
const roundedOutlineALERTS: Alert[] = [
  {
    type: 'outline-primary',
    message: ' A simple outline primary alert—check it out!',
  },
  {
    type: 'outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
  },
  {
    type: 'outline-info',
    message: 'A simple outline info alert—check it out!',
  },
  {
    type: 'outline-warning',
    message: 'A simple outline warning alert—check it out!',
  },
];
const roundeDefaultALERTS: Alert[] = [
  {
    type: 'primary',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'secondary',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'info',
    message: 'A simple rounded info alert—check it out!',
  },
  {
    type: 'warning',
    message: 'A simple rounded warning alert—check it out!',
  },
];
const CustomeButtonALERTS: Alert[] = [
  {
    type: 'primary',
    message: ' A simple rounded primary alert—check it out!',
  },
  {
    type: 'secondary',
    message: 'A simple rounded secondary alert—check it out!',
  },
  {
    type: 'info',
    message: 'A simple rounded info alert—check it out!',
  },
  {
    type: 'warning',
    message: 'A simple rounded warning alert—check it out!',
  },
];
const CustomizedButtonALERTS: Alert1[] = [
  {
    type: 'outline-primary',
    message: 'A simple outline primary alert—check it out!',
    icon:'bi-exclamation-triangle'
    // svgclass:''
  },
  {
    type: 'outline-secondary',
    message: 'A simple outline secondary alert—check it out!',
    icon:'bi-exclamation-circle'
  },
  {
    type: 'outline-info',
    message: 'A simple outline info alert—check it out!',
    icon:'bi-exclamation-octagon'
  },
  {
    type: 'outline-warning',
    message: 'A simple outline warning alert—check it out!',
    icon:'bi-check-circle'
  },
];

import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [SharedModule, NgbModule],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {
  toggleClass = "line";
  
  alerts!: Alert[];

  livealerts: { message: string; show: boolean }[] = [];

  showAlert() {
    // Add a new alert to the array
    this.livealerts.push({
      message: 'Nice, you triggered this alert message!',
      show: true,
    });
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  solidAlerts: SolidAlert[] = solidALERTS;
  solidroundedAlerts: Alert[] = solidRoundedALERTS;
  outlineAlerts: OutlineAlert[] = outlineALERTS;
  solidShadowsAlerts: Alert[] = solidShadowsALERTS;
  roundedoutlineAlerts: Alert[] = roundedOutlineALERTS;
  roundeDefaultAlerts: Alert[] = roundeDefaultALERTS;
  CustomeButtonAlerts: Alert[] = CustomeButtonALERTS;
  CustomizedButtonAlerts: Alert1[] = CustomizedButtonALERTS;

  solidClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidAlerts.splice(index, 1);
  }
  solidroundedClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidroundedAlerts.splice(index, 1);
  }

  OutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.outlineAlerts.splice(index, 1);
  }
  solidShadowsAlertsClose(index: number) {
    // Remove the alert from the array based on the index
    this.solidShadowsAlerts.splice(index, 1);
  }
  roundedoutlineClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundedoutlineAlerts.splice(index, 1);
  }
  roundeDefaultClose(index: number) {
    // Remove the alert from the array based on the index
    this.roundeDefaultAlerts.splice(index, 1);
  }
  CustomeButtonClose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomeButtonAlerts.splice(index, 1);
  }
  customizedAlertclose(index: number) {
    // Remove the alert from the array based on the index
    this.CustomizedButtonAlerts.splice(index, 1);
  }

  removeRow(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }

  public isClosed = false;
  public isClosed1 = false;
  public isClosed2 = false;
  public isClosed3 = false;
  public isClosed4 = false;
  public isClosed5 = false;
  public isClosed6 = false;
  public isClosed7 = false;
  public isClosed8 = false;
  public isClosed9 = false;
  public isClosed10 = false;
  public isClosed11 = false;
  public isClosed12 = false;
  public isClosed13 = false;
  public isClosedA = false;
  public isClosedB = false;
  public isClosedC = false;
  public isClosedD = false;

  Closetoggle(item: any) {
    if (item == 'zero') {
      this.isClosed = true;
    }
    if (item == 'one') {
      this.isClosed1 = true;
    }
    if (item == 'two') {
      this.isClosed2 = true;
    }
    if (item == 'three') {
      this.isClosed3 = true;
    }
    if (item == 'four') {
      this.isClosed4 = true;
    }
    if (item == 'five') {
      this.isClosed5 = true;
    }
    if (item == 'six') {
      this.isClosed6 = true;
    }
    if (item == 'seven') {
      this.isClosed7 = true;
    }
    if (item == 'eight') {
      this.isClosed8 = true;
    }
    if (item == 'nine') {
      this.isClosed9 = true;
    }
    if (item == 'ten') {
      this.isClosed10 = true;
    }
    if (item == 'eleven') {
      this.isClosed11 = true;
    }
    if (item == 'twelve') {
      this.isClosed12 = true;
    }
    if (item == 'A') {
      this.isClosedA = true;
    }
    if (item == 'B') {
      this.isClosedB = true;
    }
    if (item == 'C') {
      this.isClosedC = true;
    }
    if (item == 'D') {
      this.isClosedD = true;
    }
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  private _message$ = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert | any;
  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert:
    | NgbAlert
    | any;

  constructor() {
    // setTimeout(() => this.staticAlert.close(), 20000);
    this.reset();

    this._message$
      .pipe(
        takeUntilDestroyed(),
        tap((message) => (this.successMessage = message)),
        debounceTime(5000)
      )
      .subscribe(() => this.selfClosingAlert?.close());
  }

  public changeSuccessMessage() {
    this._message$.next(`${new Date()} - Message successfully changed.`);
  }
}
