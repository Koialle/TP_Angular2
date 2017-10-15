import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee/employee.service';
import { SharedService } from '../services/shared/shared.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public title: string;
  public employees: Employee[];
  public error: string;
  public job_id: number;

  constructor(
    private employeeService: EmployeeService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.job_id = +this.activatedRoute.snapshot.paramMap.get('job_id');
    if (this.job_id > 0) {
      this.getEmployeesByJob(this.job_id);
    } else {
      this.getEmployees();
    }
  }

  getEmployees(): void {
    this.title = "Liste de tous les employés"
    this.sharedService.setOriginalUrl('/getEmployees/byJob')
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  getEmployeesByJob(job_id: number): void {
    this.title = "Liste des employés d'un Job"
    this.sharedService.setOriginalUrl('/getEmployees/byJob/' + this.job_id)
    this.employeeService.getEmployeesByJob(job_id).subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => {
        this.error = error;
      }
    )
  }

  reload(): void {
    if (this.job_id > 0) {
      this.getEmployeesByJob(this.job_id);
    } else {
      this.getEmployees();
    }
  }
}
