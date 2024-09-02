import { Component, ViewChild } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { ChartComponent } from 'chart.js';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

const DATA = [
  {
    img: './assets/images/faces/11.jpg',
    name: 'Json Taylor',
    mail: 'jsontaylor2416@gmail.com',
    id: '#SPK12032901',
    issueDate: '25,Nov 2022',
    price: '$212.45',
    bg: 'success-transparent',
    text: 'success',
    status: 'Paid',
    dueDate: '25,Dec 2022',
  },
  {
    img: './assets/images/faces/7.jpg',
    name: 'Suzika Stallone',
    mail: 'suzikastallone3214@gmail.com',
    id: '#SPK12032912',
    issueDate: '13,Nov 2022',
    price: '$512.99',
    bg: 'warning-transparent',
    text: 'warning',
    status: 'Pending',
    dueDate: '13,Dec 2022',
  },
  {
    img: './assets/images/faces/15.jpg',
    name: 'Roman Killon',
    mail: 'romankillon143@gmail.com',
    id: '#SPK12032945',
    issueDate: '30,Nov 2022',
    price: '$2199.49',
    bg: 'danger-transparent',
    text: 'danger',
    status: 'Overdue',
    dueDate: '30,Dec 2022',
  },
  {
    img: './assets/images/faces/12.jpg',
    name: 'Charlie Davieson',
    mail: 'charliedavieson@gmail.com',
    id: '#SPK12032922',
    issueDate: '18,Nov 2022',
    price: ' $1569.99',
    bg: 'success-transparent',
    text: 'success',
    status: 'Paid',
    dueDate: '18,Dec 2022',
  },
  {
    img: './assets/images/faces/4.jpg',
    name: 'Selena Deoyl',
    mail: 'selenadeoyl114@gmail.com',
    id: '#SPK12032932',
    issueDate: '18,Nov 2022',
    price: '  $4,873.99',
    bg: 'primary-transparent',
    text: 'primary',
    status: 'Due By 1 Day',
    dueDate: '18,Dec 2022',
  },
  {
    img: './assets/images/faces/7.jpg',
    name: 'Kiara Advensh',
    mail: 'kiaraadvensh87@gmail.com',
    id: '#SPK12032978',
    issueDate: '02,Nov 2022',
    price: '  $1923.99',
    bg: 'success-transparent',
    text: 'success',
    status: 'Paid',
    dueDate: '18,Dec 2022',
  },
  {
    img: './assets/images/faces/9.jpg',
    name: 'Joseph Samurai',
    mail: 'josephsamurai@gmail.com',
    id: '#SPK12032919',
    issueDate: '15,Nov 2022',
    price: '$1,623.99',
    bg: 'success-transparent',
    text: 'success',
    status: 'Paid',
    dueDate: '15,Dec 2022',
  },
  {
    img: './assets/images/faces/13.jpg',
    name: 'Kevin Powell',
    mail: 'kevinpowell@gmail.com',
    id: '#SPK12032931',
    issueDate: '21,Nov 2022',
    price: ' $3,423.99',
    bg: 'warning-transparent',
    text: 'warning',
    status: 'Pending',
    dueDate: '21,Dec 2022',
  },
  {
    img: './assets/images/faces/8.jpg',
    name: 'Darla Jung',
    mail: 'darlajung555&@gmail.com',
    id: '#SPK12032958',
    issueDate: '15,Oct 2022',
    price: ' $2,982.99',
    bg: 'success-transparent',
    text: 'success',
    status: 'Paid',
    dueDate: '15,Nov 2022',
  },
];

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, NgbModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Total',
          data: [76, 85, 101, 98, 87, 105],
        },
        {
          name: 'Paid',
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: 'Pending',
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: 'Overdue',
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
      colors: ["#4b9bfa", "#28d193", "#ffbe14", "#f3f6f8"],
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
      tooltip: {
        y: {
          formatter: function (val: string) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    };
  }

  click(id: string) {
    const data = this.invoices.filter((x: { id: string }) => {
      return x.id != id;
    });
    this.invoices = data;
  }
  invoices = DATA;

  public counter1 = 1;
  source = interval(0.2);
  subscribe = this.source.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 192) {
      this.subscribe.unsubscribe();
    }
  });
  public counter2 = 1;
  source2 = interval(0.2);
  subscribe2 = this.source2.subscribe(() => {
    this.counter2++;
    if (this.counter2 == 68) {
      this.subscribe2.unsubscribe();
    }
  });
  public counter3 = 1;
  source3 = interval(0.2);
  subscribe3 = this.source3.subscribe(() => {
    this.counter3++;
    if (this.counter3 == 81) {
      this.subscribe3.unsubscribe();
    }
  });
  public counter4 = 1;
  source4 = interval(0.2);
  subscribe4 = this.source4.subscribe(() => {
    this.counter4++;
    if (this.counter4 == 32) {
      this.subscribe4.unsubscribe();
    }
  });
}