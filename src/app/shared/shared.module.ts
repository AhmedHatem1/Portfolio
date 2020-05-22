import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [SocialMediaComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),

  ]
})
export class SharedModule { }
