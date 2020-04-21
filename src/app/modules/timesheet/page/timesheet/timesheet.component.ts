import { Component, OnInit } from '@angular/core';
import { TimesheetEntry, getTimesheetEntryInitialState } from 'src/app/core/models/timesheet-entry.model';

@Component({
  selector: 'mt-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  constructor() {}
  weekNumber: number = 0;
  weekDateEntry: TimesheetEntry;
  weekDateEntries: Array<TimesheetEntry>;
  dayNames: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  ngOnInit(): void {
    this.weekDateEntries = this.getDates(this.weekNumber);
  }

  getDates(weekNumber: number) {
    let weekDays: Array<TimesheetEntry> = [];
    let weekDay: TimesheetEntry = getTimesheetEntryInitialState();
    let curr = new Date();
    curr.setDate(curr.getDate() + weekNumber);
    let firstday = new Date(curr.getTime() - 60 * 60 * 24 * curr.getDay() * 1000);
    for (let i = 0; i < 7; i++) {
      weekDay = {
        ...weekDay,
        date: new Date(curr.getTime() + 60 * 60 * 24 * i * 1000).toISOString().slice(0, 10),
        dayName: this.dayNames[i],
      };
      weekDays = [...weekDays, weekDay];
    }
    return weekDays;
  }
  nextWeek() {
    this.weekNumber += 7;
    this.ngOnInit();
  }
  previousWeek() {
    this.weekNumber -= 7;
    this.ngOnInit();
  }
}
