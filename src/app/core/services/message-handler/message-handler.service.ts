import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {

  constructor(private toasterService: ToastrService) {
  }

  errorToaster(message, title = '') {
    return this.toasterService.error(message, title);
  }

  successToaster(message, title = '', config?) {
    return this.toasterService.success(message, title);
  }

  warningToaster(message, title = '') {
    return this.toasterService.warning(message, title);
  }

  infoToaster(message, title = '') {
    return this.toasterService.info(message, title);
  }

  showToaster(message, title = '') {
    return this.toasterService.show(message, title);
  }

  clearToaster(toasterId?: number) {
    this.toasterService.clear(toasterId);
  }

}
