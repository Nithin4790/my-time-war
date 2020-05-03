import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './page/project/project.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService as AuthGuard } from './../../core/services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
  ],
  exports: [RouterModule, ProjectComponent],
})
export class ProjectModule {}
