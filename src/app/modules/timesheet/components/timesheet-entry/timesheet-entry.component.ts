import { Component, Input, OnInit } from '@angular/core';
import { TimesheetEntry } from '../../page/timesheet/timesheet.component';

@Component({
  selector: 'mt-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss'],
})
export class TimesheetEntryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() dateEntry: TimesheetEntry;
  panelOpenState = false;
}
