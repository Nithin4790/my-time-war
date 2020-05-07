import { Component, Input, OnInit } from '@angular/core';
import { TimesheetEntryRow } from 'src/app/core/models/timesheet-entry.model';

@Component({
  selector: 'mt-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss'],
})
export class TimesheetEntryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() dateEntry: TimesheetEntryRow;
  @Input() dayName: string;
  panelOpenState = false;
}
