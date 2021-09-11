import { CommonModule } from '@angular/common';
import { ElementInvalidComponent } from './components/element-invalid/element-invalid.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';

const components = [ElementInvalidComponent, LoaderComponent]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class SharedModule { }
