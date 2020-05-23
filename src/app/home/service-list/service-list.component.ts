import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  list = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

}
