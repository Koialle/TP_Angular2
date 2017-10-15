import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-emp-by-dep',
  templateUrl: './emp-by-dep.component.html',
  styleUrls: ['./emp-by-dep.component.css']
})
export class EmpByDepComponent implements OnInit {
  public title: string;
  public department_id: number;
  public error: string;
  public employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "Liste des employés d'un Département"
    let dept_id: number = +this.activatedRoute.snapshot.paramMap.get('department_id');
    if (dept_id > 0) {
      this.getEmployeesByDep(dept_id);
    }
  }

  getEmployeesByDep(department_id: number): void {
    this.department_id = department_id;
    this.employeeService.getEmployeesByDep(department_id).subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => {
        this.error = error;
      }
    )
  }

  departmentSelected(department_id: number): void {
    this.getEmployeesByDep(department_id);
  }
}
