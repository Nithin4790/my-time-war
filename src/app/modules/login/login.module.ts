import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
