import { Process } from './../../core/models/process';
import { ProcessService } from './../../core/services/process/process.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  list: Process;
  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.processService.getProcess().subscribe((res: Process) => {
      this.list = res;
    })
  }

}
