import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  constructor() {}
  weekDateEntry: TimesheetEntry;
  weekDateEntries: Array<TimesheetEntry>;
  ngOnInit(): void {
    this.weekDateEntries = this.getDatesFromCurrentWeek();
  }

  getDatesFromCurrentWeek() {
    let weekDays: Array<TimesheetEntry> = [];
    let weekDay: TimesheetEntry = {
      date: '',
      hours: 0.0,
      project: '',
      projectCategory: '',
      task: '',
      comments: '',
    };
    let curr = new Date();
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
      weekDay.date = day;
      weekDay = {
        date: day,
        hours: 0.0,
        project: '',
        projectCategory: '',
        task: '',
        comments: '',
      };
      weekDays.push(weekDay);
    }
    return weekDays;
  }
}

export interface TimesheetEntry {
  date: string;
  hours: number;
  project: string;
  projectCategory: string;
  task: string;
  comments: string;
}
