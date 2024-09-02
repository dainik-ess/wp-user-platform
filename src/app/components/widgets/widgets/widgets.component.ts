import { Component } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [SharedModule,NgApexchartsModule,LeafletModule,HttpClientModule,NgbModule],
  templateUrl: './widgets.component.html', 
  styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {
  map!: L.Map;

  options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      }),
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629),
  };
  
  chartOptions1: any = {
    series: [{
      name: 'Job Applied',
      type: 'line',
      data: [25, 50, 30, 55, 20, 45, 30]
  }, {
      name: 'Job Viewed',
      type: 'area',
      data: [35, 25, 40, 30, 45, 35, 60]
  }],
  chart: {
      height: 348,
      type: 'line',
      stacked: false,
      toolbar: {
          show: false
      },
      dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 7,
          left: 1,
          blur: 3,
          color: '#000',
          opacity: 0.2
      },
  },
  colors: ["#845adf", "rgba(235, 230, 246, 0.2)"],
  grid: {
      borderColor: '#e9edf4',
      padding: {
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
      },
  },
  stroke: {
      width: [2, 2],
      curve: 'smooth',
      dashArray: [0, 4]
  },
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  markers: {
      size: 4,
      hover: {
          size: 5
      }
  },
  fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
          inverseColors: false,
          shadeIntensity: 1,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
      }
  },
  legend: {
      show: true,
      position: 'top',
      fontFamily: 'Inter, sans-serif',
      markers: {
          width: 10,
          height: 10,
      }
  },
  xaxis: {
      type: 'week',
      axisBorder: {
          show: true,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
      labels: {
          rotate: -90
      }
  },
  yaxis: {
      title: {
          style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600
          },
      },
      labels: {
          formatter: function (y:any) {
              return y.toFixed(0) + "";
          }
      }
  },
  tooltip: {
      shared: true,
      intersect: false,
      y: {
          formatter: function (y:any) {
              if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
              }
              return y;

          }
      }
  }
}

chartOptions2: any = {
  series: [
    {
        name: "Tablet",
        data: [[10, 35, 80]]
    },
    {
        name: "Mobile",
        data: [[22, 10, 80]]
    },
    {
        name: "Desktop",
        data: [[25, 25, 150]]
    },
],
chart: {
    height: 350,
    type: "bubble",
    toolbar: {
        show: false
    }
},
grid: {
    borderColor: '#f3f3f3',
    strokeDashArray: 3
},
colors: ["#ff8c33", "#28d193", "#4b9bfa"],
dataLabels: {
    enabled: false
},
legend: {
    show: true,
    fontSize: '13px',
    labels: {
        colors: '#959595',
    },
    markers: {
        width: 10,
        height: 10,
    },
},
xaxis: {
    min: 0,
    max: 50,
    labels: {
        show: false,
    },
    axisBorder: {
        show: false,
    },
},
yaxis: {
    max: 50,
    labels: {
        show: false,
    },
}
}

chartOptions3:any = {
  series: [
    {
      data: [17, 22, 37, 47, 39, 28, 14],
      name: 'Revenue',
    },
  ],
  chart: {
    type: 'bar',
    height: 235,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 6,
      left: 6,
      blur: 3,
      color: '#000',
      opacity: 0.05,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      borderRadius: 4,
      horizontal: false,
      colors: {
        ranges: [
          {
            from: 41,
            to: Infinity,
            color: "#845adf",
          },
          {
            from: 0,
            to: 40,
            color: "#ece7f7",
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    borderColor: 'transparent',
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    colors: '#fff',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      rotate: -90,
      style: {
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  yaxis: {
    colors: '#fff',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
};

chartOptions4:any = {
  series: [
    {
      name: 'Revenue',
      data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55],
    },
  ],
  chart: {
    height: 180,
    type: 'area',
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1.4],
    show: true,
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  markers: {
    size: 0,
  },
  colors: ['#ffd15c'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
}

chartOptions5:any = {
  series: [
    {
      data: [34, 55, 41, 67, 22, 43, 21],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#a3b3fd'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#a3b3fd'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};
chartOptions6:any = {
  series: [
    {
      data: [34, 55, 41, 47, 32, 53, 31],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#60a5fa'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#60a5fa'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};
chartOptions7:any = {
  series: [
    {
      data: [31, 53, 32, 47, 41, 55, 44],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#FF534D'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#FF534D'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};
chartOptions8:any = {
  series: [
    {
      data: [21, 43, 22, 45, 35, 55, 34],
    },
  ],
  chart: {
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      right: 6,
      blur: 3,
      color: ['#FFBE14'],
      opacity: 0.2,
    },
    type: 'line',
    height: 20,
    width: 100,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return '';
        },
      },
    },
    marker: {
      show: false,
    },
  },
  colors: ['#FFBE14'],
  stroke: {
    width: [1.5],
    curve: ['smooth'],
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.9,
      opacityTo: 0.9,
      stops: [0, 98],
    },
  },
};

}
