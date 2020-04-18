import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './page/timesheet/timesheet.component';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetEntryComponent } from './components/timesheet-entry/timesheet-entry.component';
import { MaterialModule } from 'src/app/shared/material.module';

export const routes: Routes = [
  {
    path: 'timesheet',
    component: TimesheetComponent,
  },
];

@NgModule({
  declarations: [TimesheetComponent, TimesheetEntryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule, TimesheetComponent],
})
export class TimesheetModule {}
