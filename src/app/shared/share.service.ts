import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }
  getYearlyreport() {
    let url = "http://10.30.5.152:8080/WBA_API/year";
    return this.http.get(url);
  }
}
