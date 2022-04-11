import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class PageLoginModule { }
