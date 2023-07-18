
import { ShareService } from './../../shared/share.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



//import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartOptions: {};
  numberss: any = new Array();
  datas: any = [];
  first:any;
  Highcharts = Highcharts;
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  constructor(public shareService : ShareService) { }




  ngOnInit(): void {



  this.shareService.getYearlyreport().subscribe(data => {

      this.datas = data;

      this.numberss.push(parseInt(this.datas[0].january, 10))
      this.numberss.push(parseInt(this.datas[0].february, 10))
      this.numberss.push(parseInt(this.datas[0].march, 10))
      this.numberss.push(parseInt(this.datas[0].april, 10))
      this.numberss.push(parseInt(this.datas[0].may, 10))
      this.numberss.push(parseInt(this.datas[0].june, 10))
      this.numberss.push(parseInt(this.datas[0].july, 10))
      this.numberss.push(parseInt(this.datas[0].august, 10))
      this.numberss.push(parseInt(this.datas[0].september, 10))
      this.numberss.push(parseInt(this.datas[0].octomber, 10))
      this.numberss.push(parseInt(this.datas[0].november, 10))
      this.numberss.push(parseInt(this.datas[0].december, 10))

    this.chartOptions ={
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: 'WBA Dashboard'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 55,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: this.months[0],
          y: this.numberss[0],
          sliced: true,
          selected: true
        },  {
          name: this.months[1],
          y: this.numberss[1]
        }, {
          name: this.months[2],
          y: this.numberss[2]
        }, {
          name: this.months[3],
          y: this.numberss[3]
        }, {
          name: this.months[4],
          y: this.numberss[4]
        }, {
          name: this.months[5],
         y: this.numberss[5]
        }, {
          name: this.months[6],
         y: this.numberss[6]
        }, {
          name: this.months[7],
          y: this.numberss[7]
        }, {
          name: this.months[8],
          y: this.numberss[8]
        }, {
          name: this.months[9],
          y: this.numberss[9]
          }, {
            name: this.months[10],
          y: this.numberss[10]
          }, {
            name: this.months[11],
          y: this.numberss[11]
          }]
      }]
    }



//

  })
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );

    }, 300);
  } // mgon it

}
