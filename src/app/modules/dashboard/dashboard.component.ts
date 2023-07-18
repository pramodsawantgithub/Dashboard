import { DashboardService } from './../dashboard.service';
import {   OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { analyzeFileForInjectables } from '@angular/compiler';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },

  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit  {
  bigChart :any = [];
  cards :any =[];
  piaChart :any = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  //@ViewChild(MatSort) sort: MatSort;
  //Error - Type 'MatSort | null' is not assignable to type 'MatSort'. Type 'null' is not assignable to type 'MatSort'.ts(2322)

 //@ViewChild(MatPaginator,{static: false}) sort!:MatSort;
  @ViewChild(MatPaginator, { static: false } ) paginator!: MatPaginator;
  constructor(private dashboardservice : DashboardService) {
    this.dashboardservice.getYearlyreport().subscribe(data=>{
     //console.warn(data)
     //dvl
    })
  }
  ngOnInit()  {
    //this.bigChart = this.dashboardservice.bigChart();
    //this.bigChart = this.dashboardservice.getMonthlyreport();
    //this.cards = this.dashboardservice.cards()
    //this.piaChart = this.dashboardservice.piaChart();
    //this.piaChart = this.dashboardservice.getYearlyreport();
   //console.warn(this.dashboardservice.getYearlyreport() );
    //console.warn(this.dashboardservice.getTasks());

;  }



}


