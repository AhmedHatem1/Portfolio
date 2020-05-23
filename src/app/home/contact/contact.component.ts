import { MessageHandlerService } from './../../core/services/message-handler/message-handler.service';
import { TaskService } from './../../core/services/task/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private messageHandlerService: MessageHandlerService) { }
  ngOnInit() {
    this.form = this.fb.group({
      "name": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "service": new FormControl('', Validators.required),
      "priority": new FormControl('', Validators.required),
      "about-project": new FormControl('', Validators.required),
    });
  }
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get service() {
    return this.form.get('service');
  }
  get priority() {
    return this.form.get('priority');
  }
  get aboutProject() {
    return this.form.get('about-project');
  }

  onSubmit() {
    console.log('this.form.value', this.form.value)
    this.taskService.sendData(this.form.value).subscribe(res => {
      this.messageHandlerService.successToaster("Done")
    })
  }

}
