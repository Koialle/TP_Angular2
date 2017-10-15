import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public error: string;
  @Input() public employees: Employee[];

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
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
        //this.getEmployees();
        this.router.navigate(['/home']);
      }
    );
  }
}
