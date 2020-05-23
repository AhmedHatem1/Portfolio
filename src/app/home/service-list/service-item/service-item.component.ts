import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  @Input() isOdd;
  ngOnChanges(): void {
    console.log('sss', this.isOdd)
  }
  constructor() { }

  ngOnInit() {
  }

}
