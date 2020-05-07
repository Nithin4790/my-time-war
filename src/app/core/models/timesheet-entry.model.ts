export interface TimesheetEntryRow {
  date: string;
  dayName: string;
  hours: number;
  project: string;
  projectCategory: string;
  task: string;
  comments: string;
}

export function getTimesheetEntryRowInitialState(): TimesheetEntryRow {
  return {
    ...DEFAULT_TIMESHEET_ENTRY,
  };
}

export const DEFAULT_TIMESHEET_ENTRY: TimesheetEntryRow = {
  date: '',
  dayName: '',
  hours: 0.0,
  project: '',
  projectCategory: '',
  task: '',
  comments: '',
};
