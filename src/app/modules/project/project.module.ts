import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './page/project/project.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
  },
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, SharedModule],
  exports: [RouterModule, ProjectComponent],
})
export class ProjectModule {}
