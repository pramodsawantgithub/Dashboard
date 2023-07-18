import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widght-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label: string ="Users";
   @Input() total: string = "18k";
 @Input() percentage: string = "50";

Highcharts = Highcharts;
 chartOptions: {};
 @Input() data ={};
  constructor() {
    this.chartOptions ={};
    this.label;
     this.total;
  this.percentage;


  }

  ngOnInit(){
    this.chartOptions = {
      chart: {
        type: 'pia',
        backgrooundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },

      tooltip: {
        split: true,
        valueSuffix: ' Count',
        outside:true
      },
      legend:{
        enabled :true
      },
      credits: {
        enabled: true,
      },
      exporting: {
        enabled: false,
      },
      xAxis:{
        labels:{
          enabled:false
        },
        title :{
          text:null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []

      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []

      },
      series: [{
        //name: 'Asia',
        data: this.data
      }, ]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );

    }, 300);


  }
}
