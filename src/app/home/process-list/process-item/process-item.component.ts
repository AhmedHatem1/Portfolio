import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.scss']
})
export class ProcessItemComponent implements OnInit {
  @Input() item;
  @Input() index;
  constructor() { }

  ngOnInit() {
  }

}
