import { MessageHandlerService } from './../message-handler/message-handler.service';
import { Injectable } from '@angular/core';
import * as httpStatusCode from '../../enums/HttpStatusCode';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private messageHandlerService: MessageHandlerService) { }

  // to show toaster error dynamically based on the status code
  whichError(errorStatusCode: number, errorMessage: string) {
    switch (errorStatusCode) {
      case httpStatusCode.ServerErrors.INTERNALSERVERERROR:
        this.messageHandlerService.errorToaster('حدث خطأ فى النظام');
        break;
      case httpStatusCode.ClientErrors.NOTFOUND:
        this.messageHandlerService.errorToaster('حدث خطأ فى النظام');
        break;
      // and so on
    }
  }
}
