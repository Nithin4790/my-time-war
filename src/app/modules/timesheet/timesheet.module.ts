import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './page/timesheet/timesheet.component';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetEntryComponent } from './components/timesheet-entry/timesheet-entry.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuardService as AuthGuard } from './../../core/services/auth-guard.service';
import { TimesheetEntryRowComponent } from './components/timesheet-entry-row/timesheet-entry-row.component';

export const routes: Routes = [
  {
    path: 'timesheet',
    component: TimesheetComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [TimesheetComponent, TimesheetEntryComponent, TimesheetEntryRowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
  ],
  exports: [RouterModule, TimesheetComponent],
})
export class TimesheetModule {}
