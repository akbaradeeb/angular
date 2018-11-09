import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent} from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [LoginComponent, ForgotComponent, AuthComponent],
  imports: [
    CommonModule,
    HttpModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
