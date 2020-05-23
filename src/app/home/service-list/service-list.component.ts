import { Service } from './../../core/models/services';
import { ServiceListService } from './../../core/services/service-list/service-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  list: Service;
  constructor(private serviceListService: ServiceListService) { }

  ngOnInit() {
    this.serviceListService.getServices().subscribe((res: Service) => {
      this.list = res;
    })
  }

}
