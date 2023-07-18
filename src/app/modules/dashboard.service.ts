import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getTasks()
  {
    // its from server (after war file deployed )
    //WAR file test           http://localhost:8080/WBA_API/
    // Local test - let url ="http://localhost:9191";
    // chanee entry in host  file
    // http://wbarest.bayer.cnb:8080/WBA_API
    // its accessiable from prod
    //http://10.30.5.152:8080/WBA_API


   // let url ="http://localhost:9191/tasks";
    let url = "http://10.30.5.152:8080/WBA_API/tasks";
    return this.http.get(url);
  }
  getYearlyreport() {
    //let url = "http://localhost:9191/year";
    let url = "http://10.30.5.152:8080/WBA_API/year";
    return this.http.get(url);
  }
  getMonthlyreport() {
   // let url = "http://localhost:9191/month";
    let url = "http://10.30.5.152:8080/WBA_API/month";

    return this.http.get(url);
  }
  getErrors() {
   // let url = "http://localhost:9191/errors";
    let url = "http://10.30.5.152:8080/WBA_API/errors";

    return this.http.get(url);
  }





}
