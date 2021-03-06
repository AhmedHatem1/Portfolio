import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { AboutProfileComponent } from './about/about-profile/about-profile.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceItemComponent } from './service-list/service-item/service-item.component';
import { ProcessListComponent } from './process-list/process-list.component';
import { ProcessItemComponent } from './process-list/process-item/process-item.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AboutComponent, AboutInfoComponent, AboutProfileComponent, ServiceListComponent, ServiceItemComponent, ProcessListComponent, ProcessItemComponent, ContactComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
