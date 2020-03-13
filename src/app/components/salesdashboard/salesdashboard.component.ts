import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.scss']
})
export class SalesdashboardComponent implements OnInit {
  @ViewChild('salesBarChart', { static: true }) salesBarChart: ElementRef;
  @ViewChild('salesAreaChart', { static: true }) salesAreaChart: ElementRef;
  @ViewChild('salesPriceChart', { static: true }) salesPriceChart: ElementRef;
  constructor() { }

  ngOnInit() {
    this.createBarChart();
    this.createAreaVolumeChart();
    this.createAreaChartPrice();
  }
  createBarChart() {
    const ctx = this.salesBarChart.nativeElement.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, '#008AEE');
    gradient.addColorStop(1, '#013BCF');
    const salesBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'test',
          'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'],
        datasets: [{
          label: '',
          data: [15, 9, 12, 6, 3, 2, 10, 1.5, 2, 3, 6, 9, 15, 4],
          // fill: gradient,
          backgroundColor: gradient,
          borderColor: gradient
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  createAreaVolumeChart() {
    const ctx = this.salesAreaChart.nativeElement.getContext('2d');
    ctx.height = 200;
    const salesAreaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: '',
            backgroundColor: '#efefef00',
            borderColor: '#2AD0C6',
            pointBorderColor: '#2AD0C6',
            pointBackgroundColor: '#2AD0C6',
            data: [50, 30, 100, 55, 75, 35, 40, 25, 55, 20],
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        // plugins: {
        //   filler: {
        //     propagate: true
        //   }
        // },
        // maintainAspectRatio: false,
        // spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false,
              maxRotation: 0,
              padding: 15,
            },
            gridLines: {
              display: false
            },
          }],
          yAxes: [
            {
              ticks: {
                max: 100,
                min: 0,
                stepSize: 20,
                autoSkip: false,
                padding: 15
              },
              gridLines: {
                lineWidth: 0.2,
                color: '#828282'
              }
            }
          ]
        }
      }
    });
  }
  createAreaChartPrice() {
    const ctx = this.salesPriceChart.nativeElement.getContext('2d');
    ctx.height = 200;
    const salesPriceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: '',
            backgroundColor: '#efefef00',
            borderColor: '#EB5757',
            pointBorderColor: '#EB5757',
            pointBackgroundColor: '#EB5757',
            // pointRadius: 0,
            data: [20, 50, 35, 58, 75, 55, 40, 80, 100, 30, 50],
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        // plugins: {
        //   filler: {
        //     propagate: true
        //   }
        // },
        // maintainAspectRatio: false,
        // spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false,
              maxRotation: 0,
              padding: 15
            },
            gridLines: {
              display: false
            },
          }],
          yAxes: [
            {
              ticks: {
                max: 100,
                min: 0,
                stepSize: 20,
                autoSkip: false,
                padding: 15
              },
              gridLines: {
                lineWidth: 0.2,
                color: '#828282'
              }
            }
          ]
        }
      }
    });
  }
}
