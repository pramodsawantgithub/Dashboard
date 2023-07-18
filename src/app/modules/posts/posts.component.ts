import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [DatePipe]
})
export class PostsComponent implements OnInit {
  data:any =[];
    todaysdate: Date = new Date();
    dd:any;
    mm:any;
    yyyy:any;
    tDate:any;
  searchText:any;


  constructor(private dashboardservice: DashboardService, private datePipe: DatePipe) {

    this.dd = this.todaysdate.getDate()
    this.mm = ( this.todaysdate.getMonth() + 1)
    this.mm = ('0' + this.mm).slice(-2)
    this.yyyy = this.todaysdate.getFullYear()
    this.tDate = this.yyyy + '-' + this.mm + '-' + this.dd;

    console.log(this.tDate)
//this.dashboardservice.getTasks().subscribe(data=>{
    this.dashboardservice.getTasks().subscribe(data=>{
        console.warn(data)
        this.data=data;
        this.todaysdate.getDate
    })
  }
  ngOnInit(): void {
    //this.dashboardservice.getTasks().subscribe(data => { console.warn(data); //console.log(this.todaysdate )  })
  }


}
