import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/services/auth.guard';
import { ContactComponent } from './feature/contact/contact.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '404NotFound' },
  { path: '404NotFound', component: LoginComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
