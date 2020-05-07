import { Component, OnInit } from '@angular/core';
import {
  TimesheetEntryRow,
  getTimesheetEntryRowInitialState,
} from 'src/app/core/models/timesheet-entry.model';
import * as moment from 'moment';

@Component({
  selector: 'mt-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  timeSheetEntries: number = 1;
  weekNumber: number = 0;
  weekDateEntry: TimesheetEntryRow;
  weekDateEntries: TimesheetEntryRow[];
  dayNames: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  ngOnInit(): void {
    this.weekDateEntries = this.getDates(this.weekNumber);
  }

  getDates(weekNumber: number) {
    let weekDays: TimesheetEntryRow[] = [];
    let weekDay: TimesheetEntryRow = getTimesheetEntryRowInitialState();
    for (let i = 0; i < 7; i++) {
      weekDay = {
        ...weekDay,
        date: moment()
          .add(weekNumber, 'week')
          .startOf('week')
          .add(i, 'days')
          .format('yyyy-MM-DD'),
        dayName: this.dayNames[i],
      };
      weekDays = [...weekDays, weekDay];
    }
    return weekDays;
  }
  nextWeek() {
    this.weekNumber += 1;
    this.ngOnInit();
  }
  previousWeek() {
    this.weekNumber -= 1;
    this.ngOnInit();
  }
}
