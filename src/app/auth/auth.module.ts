import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent} from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { CcLogoDirective } from '../_directive/cc-logo.directive';

@NgModule({
  declarations: [LoginComponent, ForgotComponent, AuthComponent,CcLogoDirective],
  imports: [
    CommonModule,
    HttpModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
