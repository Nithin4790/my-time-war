import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './page/timesheet/timesheet.component';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetEntryComponent } from './components/timesheet-entry/timesheet-entry.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  {
    path: 'timesheet',
    component: TimesheetComponent,
  },
];

@NgModule({
  declarations: [TimesheetComponent, TimesheetEntryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, SharedModule],
  exports: [RouterModule, TimesheetComponent],
})
export class TimesheetModule {}
