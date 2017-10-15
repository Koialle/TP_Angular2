import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../services/common/common.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() public job_id: number;
  @Output() onChoose = new EventEmitter();
  @Output() onError = new EventEmitter();
  public jobs: Job[];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.commonService.getJobs().subscribe(
      (jobs) => {
        this.jobs = jobs;
      },
      (error) => {
        this.onError.emit(error.message);
      }
    );
  }

  onChange(value: string) {
    this.job_id = +value;
    this.onChoose.emit(this.job_id);
  }
}
