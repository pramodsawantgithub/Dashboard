import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { ShareService } from './../../shared/share.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  data:any =[];

  constructor(public shareService: ShareService, private dashboardservice: DashboardService) { }

  ngOnInit(): void {
    //   this.dashboardservice.getTasks().subscribe(data=>{

   // this.data = data;
    //this.todaysdate.getDate })

    this.dashboardservice.getTasks().subscribe(
      data =>{


      }

    )
  }

}
