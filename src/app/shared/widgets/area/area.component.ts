import { Router, RouterModule } from '@angular/router';
import { ShareService } from './../../share.service';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


import Highcharts3D from 'highcharts/highcharts-3d.src';
// table Get_Yearly_Count created for data
// INSERT INTO [WPConfiguration].[dbo].[Get_Yearly_Count] EXEC	[WBAqueue].[dbo].[sp_Get_Yearly_Count]
// TRUNCATE TABLE  [WPConfiguration].[dbo].[Get_Yearly_Count]
// INSERT INTO[WPConfiguration].[dbo].[Get_Yearly_Count] EXEC[WBAqueue].[dbo].[sp_Get_Yearly_Count]




@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})


export class AreaComponent implements OnInit {
// data is input from dashboard componant 1) this function get from service 2) call in dashboard componont, 3) pass as data in dashboard.html 4) input this value in area coomponent
//5) then pass this array in serice as this.data
  @Input() data =[];
 chartOptions: {};
  Highcharts = Highcharts;
  datas :any = [];

  numberss: any = new Array();





  //highcharts3D = Highcharts3D;
  constructor(public shareService: ShareService, public router:RouterModule ) {



  }



  getOptions()
      {

        return new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
      }



  ngOnInit() {

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
     // console.warn(this.numberss)


      this.chartOptions = {

        chart: {
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 10,
            beta: -38,
            depth: 200
          }
        },
        title: {
          text: 'WBA Dashboard'
        },
        subtitle: {
          text: ' '
        },
        plotOptions: {
          column: {
            depth: 25
          }
        },
        xAxis: {
          categories: this.getOptions(),
          labels: {
            skew3d: true,
            style: {
              fontSize: '26px'

            }
          }
        },
        yAxis: {
          title: {
            text: null,

          }
        },
        series: [{
          name: 'WBA',
          data: this.numberss
 //static data

// data: ['39397', '23948', '29269', '18931', '19173', '56804', '85460', '65332', '0', '0', '0', '0']

        }]
};

    })

HC_exporting(Highcharts);

setTimeout(() => {
  window.dispatchEvent(
    new Event ('resize')
  );

}, 300);


    }//ng o it
  }

