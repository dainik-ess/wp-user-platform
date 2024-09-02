import { Component, ViewChild } from '@angular/core';
import flatpickr from 'flatpickr';
import { SharedModule } from '../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions } from 'chart.js';
import { interval } from 'rxjs';
const DATA=[
  {
    name:'Design New Landing Page',
    id:'SPK - 01',
    date:' 02-06-2023',
    status:'New',
    dueDate:' 10-06-2023',
    prority:'Medium',
    bg:'primary',
    bg1:'secondary',
    text:'secondary',
    images:[

     "./assets/images/faces/2.jpg",
     "./assets/images/faces/8.jpg",
    "./assets/images/faces/2.jpg",
    ],
    number:' +2'
  },
  {
    name:'New Project Buleprint',
    id:'SPK - 04',
    date:' 05-06-2023',
    status:'Inprogress',
    dueDate:' 15-06-2023',
    prority:'High',
    bg:'secondary',
    bg1:'danger',
    text:'danger',
    images:[
      "./assets/images/faces/12.jpg",
      "./assets/images/faces/11.jpg",
     ],
    number:' +4'
  },
  {
    name:'Server Side Validation',
    id:'SPK - 11',
    date:' 12-06-2023',
    status:'Pending',
    dueDate:' 16-06-2023',
    prority:'Low',
    bg:'warning',
    bg1:'success',
    text:'success',
    images:[
      "./assets/images/faces/5.jpg",
      "./assets/images/faces/9.jpg",
      "./assets/images/faces/13.jpg",

     ],
    number:' +5'
  },
  {
    name:'New Plugin Development',
    id:'SPK - 24',
    date:' 08-06-2023',
    status:'Completed',
    dueDate:' 17-06-2023',
    prority:'Low',
    bg:'success',
    bg1:'success',
    text:'success',
    images:[
      "./assets/images/faces/2.jpg",
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/2.jpg",

     ],
    number:'+2'
  },
  {
    name:'Designing New Authentication Page',
    id:'SPK - 16',
    date:' 03-06-2023',
    status:'Inprogress',
    dueDate:'  08-06-2023',
    prority:'Medium',
    bg:'secondary',
    bg1:'secondary',
    text:'secondary',
    images:[
      "./assets/images/faces/10.jpg",
      "./assets/images/faces/15.jpg",

     ],
    number:'+3'
  },
  {
    name:'Documentation For New Template',
    id:'SPK - 07',
    date:' 12-06-2023',
    status:'New',
    dueDate:'  25-06-2023',
    prority:'High',
    bg:'primary',
    bg1:'danger',
    text:'danger',
    images:[
      "./assets/images/faces/12.jpg",

     ],
     number:'+1'

  },
  {
    name:'Updating Old UI',
    id:'SPK - 13',
    date:' 06-06-2023',
    status:'Completed',
    dueDate:'  12-06-2023',
    prority:'Low',
    bg:'success',
    bg1:'success',
    text:'success',
    images:[
      "./assets/images/faces/11.jpg",
      "./assets/images/faces/1.jpg",
      "./assets/images/faces/10.jpg",

     ],
     number:'+1'
  },
  {
    name:'Developing New Events In Plugins',
    id:'SPK - 20',
    date:' 14-06-2023',
    status:'Pending',
    dueDate:'  19-06-2023',
    prority:'High',
    bg:'warning',
    bg1:'danger',
    text:'danger',
    images:[
      "./assets/images/faces/3.jpg",
      "./assets/images/faces/9.jpg",

     ],
     number:'+2'
  },
]
@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [SharedModule,FlatpickrModule,NgApexchartsModule,NgSelectModule,MaterialModuleModule,FormsModule,ReactiveFormsModule,NgbModule],
  providers:[FlatpickrDefaults],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  closeResult!: string;
  flatpickrOptions: any = {
    inline: true,
  };

  //Select one
  selectedSimpleItem = 'New';
  simpleItems: any = [];
  // selct 2
  selectedSimpleItem1 = 'High';
  simpleItems1: any = [];

  constructor(private modalService: NgbModal) {
    this.chartOptions = {
      series: [
        {
          name: 'New',
          data: [76, 85, 101, 98, 87, 105],
        },
        {
          name: 'Pending',
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: 'Completed',
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: 'Inprogress',
          data: [13, 27, 31, 29, 35, 25],
        },
      ],
      chart: {
        type: 'bar',
        height: 210,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
          endingShape: 'rounded',
        },
      },
      grid: {
        borderColor: '#f2f5f7',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
      stroke: {
        show: true,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        labels: {
          show: true,
          style: {
            colors: '#8c9097',
            fontSize: '11px',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
      },
      yaxis: {
        title: {
          style: {
            color: '#8c9097',
          },
        },
        labels: {
          show: true,
          style: {
            colors: '#8c9097',
            fontSize: '11px',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-label',
          },
        },
      },
      fill: {
        opacity: 1,
      },
    };
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.simpleItems = ['Completed', 'InProgress', 'New', 'Pending'];
    this.simpleItems1 = ['High', 'low', 'Medium'];
    
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };

    flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#pretime', this.flatpickrOptions);

  }
  // Assigned To select
  selectedCars = ['Hercules Jhon'];
  cars = [
    { id: 1, name: 'Anglinea May' },
    { id: 2, name: 'Kairar Advin' },
    { id: 3, name: 'Mayour Kim' },
  ];
  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }

  public counter1 = 1;
  source = interval(0.2);
  subscribe = this.source.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 44) {
      this.subscribe.unsubscribe();
    }
  });
  public counter2 = 1;
  source2 = interval(0.2);
  subscribe2 = this.source2.subscribe(() => {
    this.counter2++;
    if (this.counter2 == 320) {
      this.subscribe2.unsubscribe();
    }
  });
  public counter3 = 1;
  source3 = interval(0.2);
  subscribe3 = this.source3.subscribe(() => {
    this.counter3++;
    if (this.counter3 == 82) {
      this.subscribe3.unsubscribe();
    }
  });
  public counter4 = 1;
  source4 = interval(0.2);
  subscribe4 = this.source4.subscribe(() => {
    this.counter4++;
    if (this.counter4 == 33) {
      this.subscribe4.unsubscribe();
    }
  });
}
