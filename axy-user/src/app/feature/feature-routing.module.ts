import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'contact', component: ContactComponent }
];

export const featureRoutingModule = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
