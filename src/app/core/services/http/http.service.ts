import { environment } from './../../../../environments/environment';
import { ErrorService } from './../error/error.service';
import { ApiMethods } from './../../enums/ApiMethods';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private error: ErrorService) { }

  // unit all requests and handling the errors dynamically with toaster message
  callRequest(method: (ApiMethods | string), api: string, options?: any) {


    let baseServer = 'https://example.com/api/';

    let response;
    switch (method) {
      case ApiMethods.GET:
      case "GET":
        response = this.http.request(ApiMethods.GET, `${baseServer}${api}`, options)
          .pipe(catchError(err => this.handleError(err)));
        break;
      case ApiMethods.POST:
      case "POST":
        response = this.http.request(ApiMethods.POST, `${baseServer}${api}`, options)
          .pipe(catchError(err => this.handleError(err)));
        break;
      case ApiMethods.PUT:
      case "PUT":
        response = this.http.request(ApiMethods.PUT, `${baseServer}${api}`, options)
          .pipe(catchError(err => this.handleError(err)));
        break;
      case ApiMethods.DELETE:
      case "DELETE":
        response = this.http.request(ApiMethods.DELETE, `${baseServer}${api}`, options)
          .pipe(catchError(err => this.handleError(err)));
        break;

    }
    return response;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred : ", error.error.message);
    }
    else {
      // go to the specific error and emit toaster message
      this.error.whichError(error.status, error.message);
      return throwError({ error: error.message, status: error.status })
    }
  }
}
