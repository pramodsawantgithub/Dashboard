import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { AfterViewInit } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

// Create new table Get_Monthly_Count]
//TRUNCATE TABLE  [WBAqueue].[dbo].[Get_Monthly_Count]
//INSERT INTO [WBAqueue].[dbo].[Get_Monthly_Count] EXEC	[WBAqueue].[dbo].[sp_Get_Monthly_Count]

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
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements AfterViewInit  {
data:any =[]
  sharepointdata: any

  //displayedColumns: string[] = ['workflow', 'name'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource(this.data);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //columns:string[] = ['id','author','title','category','date'];

 // @ViewChild(MatSort ,{static:true}) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatPaginator ,{static:true}) paginator:MatPaginator;
  constructor(private dashboardService : DashboardService) {

 this.dashboardService.getMonthlyreport().subscribe(mreport=>{ console.warn(mreport);this.data = mreport; })

   this.dataSource= new MatTableDataSource(ELEMENT_DATA);

 console.warn(this.data);




  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {

    this.dashboardService.getMonthlyreport().subscribe(mreport => { console.warn(mreport); this.data = mreport;
      this.data .forEach((element :any)=> {
     // console.warn(element)
        if (element.workflow == "Create-SharePointOnline#New")
        { console.warn(element.workflow)
          console.warn(element.data)
          this.sharepointdata = element.data
          console.warn(this.sharepointdata)

        }
    });


    })

 //this.dataSource.sort = this.sort;
 // this.dataSource.paginator = this.paginator;
  }
  applyFilter(event:any)
  {
    //console.log('event: ', event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
