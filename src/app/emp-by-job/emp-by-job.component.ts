import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-by-job',
  templateUrl: './emp-by-job.component.html',
  styleUrls: ['./emp-by-job.component.css']
})
export class EmpByJobComponent implements OnInit {
  public title: string;
  public job_id: number;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.title = "Choix d'un Job";
  }

  jobSelected(job_id: number): void {
    this.job_id = job_id;
    this.router.navigate(['/getEmployees/byJob/' + job_id]);
  }
}
