import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  list = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

}
