import { ApiMethods } from './../../enums/ApiMethods';
import { Observable } from 'rxjs';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { Process } from '../../models/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private httpService: HttpService) { }
  getProcess(): Observable<Process> {
    return this.httpService.callRequest(ApiMethods.GET, 'process.json')
  }
}
