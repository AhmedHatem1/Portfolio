import { Service } from './../../models/services';
import { Observable } from 'rxjs';
import { ApiMethods } from './../../enums/ApiMethods';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  constructor(private httpService: HttpService) { }

  getServices(): Observable<Service> {
    return this.httpService.callRequest(ApiMethods.GET, 'services.json')
  }
}
