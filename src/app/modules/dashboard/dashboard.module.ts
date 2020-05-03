import { AuthGuardService as AuthGuard } from './../../core/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileImageComponent,
    ProfileInfoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [
    RouterModule,
    DashboardComponent,
    ProfileImageComponent,
    ProfileInfoComponent,
  ],
})
export class DashboardModule {}
