import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, ProfileImageComponent, ProfileInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule, DashboardComponent, ProfileImageComponent, ProfileInfoComponent],
})
export class DashboardModule {}
