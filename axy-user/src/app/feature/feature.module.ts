import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const components = [
  HomeComponent,
  ContactComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FeatureModule { }
