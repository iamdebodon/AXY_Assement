import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const components = [LoginComponent, NavbarComponent, FooterComponent, AlertComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: components
})
export class CoreModule { }
