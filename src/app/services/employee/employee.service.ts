import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from '../../models/employee';

@Injectable()
export class EmployeeService {
  private employeeSrvUrl = 'http://localhost/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getEmployees');
  }

  getEmployeesByJob(job_id: number): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getEmployeesByJob/' + job_id);
  }

  getEmployeesByDep(department_id: number): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getEmployeesByDep/' + department_id);
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(this.employeeSrvUrl + 'getEmployee/' + id);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.httpClient.put(this.employeeSrvUrl + 'updateEmployee', JSON.stringify(employee));
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.httpClient.put(this.employeeSrvUrl + 'addEmployee', JSON.stringify(employee));
  }

  deleteEmployee(employee_id: number): Observable<any> {
    return this.httpClient.delete(this.employeeSrvUrl + 'deleteEmployee/' + employee_id);
  }
}
