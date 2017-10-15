import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public title: string;
  public employee: Employee;
  public employee_id: number;
  public error: string;

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');

    if (this.employee_id > 0) {
      this.title = 'Modifier un employé';
      this.getEmployee(this.employee_id);
    } else {
      this.title = 'Ajouter un employé';
    }
  }

  getEmployee(id: number) {
    return this.employeeService.getEmployee(id).subscribe(
      (employee) => {
        this.employee = employee;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  validateEmployee(id: number): void {
    if (id > 0) {
      if (isNaN(this.employee.job_id)) {
        this.error = 'Vous devez sélectionner un job !';
      } else if (isNaN(this.employee.department_id)) {
        this.error = 'Vous devez sélectionner un département !';
      } else {
        this.employeeService.updateEmployee(this.employee).subscribe(
          () => {
            this.router.navigate(['/getEmployees']);
          },
          (error) => {
            this.error = error.message;
          }
        );
      }
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(
        () => {}, // success: do nothing
        (error) => { // error
          this.error = error.message;
        },
        () => { // complete: finally
          this.router.navigate(['/getEmployees']);
        }
      );
    }
  }

  cancel(id: number) {
    if (id > 0) {
      this.location.back();
    } else {
      this.router.navigate(['/home']);
    }
  }

  jobSelected(job_id: number): void {
    this.employee.job_id = job_id;
  }

  departmentSelected(department_id: number): void {
    this.employee.department_id = department_id;
  }
}
