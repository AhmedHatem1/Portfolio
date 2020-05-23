import { Observable } from 'rxjs';
import { ApiMethods } from './../../enums/ApiMethods';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpService: HttpService) { }

  sendData(data): Observable<any> {
    return this.httpService.callRequest(ApiMethods.POST, "contact", {
      body: data
    })
  }
}
