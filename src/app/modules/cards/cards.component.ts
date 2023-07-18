import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  data: any = []; sharepointdata: any; cgridcard: any; ogridcard: any;  onboard: any; addfullaccess: any; removefullaccess: any;
  disposenpm: any; disposeresource: any; orderresource:any
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.dashboardService.getMonthlyreport().subscribe(mreport => {
      console.warn(mreport); this.data = mreport;
      this.data.forEach((element: any) => {
        // console.warn(element)

        if (element.workflow == "New-Onboard#new")              { this.onboard = element.data }
        if (element.workflow == "Create-SharePointOnline#New")  { this.sharepointdata = element.data }
        if (element.workflow == "CREATE-GRIDCARD#new")          { this.cgridcard = element.data }

        if (element.workflow == "npm#Add-FullAccess")           { this.addfullaccess = element.data }
        if (element.workflow == "npm#Remove-FullAccess")        { this.removefullaccess = element.data }
        if (element.workflow == "Order-Gridcard#New")           { this.ogridcard = element.data }

        if (element.workflow == "RMA-OrderResource#new")        { this.orderresource = element.data }
        if (element.workflow == "dispose-npm#New")              { this.disposenpm = element.data }
        if (element.workflow == "RMA-DisposeResource#New")      { this.disposeresource = element.data }


      });


    })
  }

}
