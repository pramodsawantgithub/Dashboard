import { Component, OnInit } from '@angular/core';
import { AfterViewInit,   ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from './../dashboard.service';
@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit, AfterViewInit  {
  dataSource:any = {}


  constructor(private dashboardService: DashboardService) {

    this.dashboardService.getErrors().subscribe(errorReport => { console.warn(errorReport);
      this.dataSource  = errorReport;
   })

  }
  ngAfterViewInit() {
    //
   // this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  }

}

