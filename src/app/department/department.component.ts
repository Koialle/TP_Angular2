import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common/common.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() public department_id: number;
  @Output() onChoose = new EventEmitter();
  public error: string;
  public departments: Department[];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.commonService.getDepartments().subscribe(
      (departments) => {
        this.departments = departments;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  /**
   *
   * @param value
   */
  onChange(value: string): void {
    this.department_id = +value;
    this.onChoose.emit(this.department_id);
  }
}
