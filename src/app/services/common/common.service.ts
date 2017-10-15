import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {
  private employeeSrvUrl = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getJobs');
  }

  getDepartments(): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getDepartments');
  }
}
