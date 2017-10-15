import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public title = 'Liste de tous les employés';
  public employees: Employee[];
  public error: string;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  detail(employee_id: number): void {
    this.router.navigate(['/detailEmployee/' + employee_id]);
  }

  delete(employee_id: number): void {
    this.employeeService.deleteEmployee(employee_id).subscribe(
      () => {},
      (error) => {
        this.error = error.message;
      },
      () => {
        this.getEmployees();
      }
    );
  }
}
