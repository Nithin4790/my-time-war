export interface TimesheetEntry {
  date: string;
  dayName: string;
  hours: number;
  project: string;
  projectCategory: string;
  task: string;
  comments: string;
}

export function getTimesheetEntryInitialState(): TimesheetEntry {
  return {
    ...DEFAULT_TIMESHEET_ENTRY,
  };
}

export const DEFAULT_TIMESHEET_ENTRY: TimesheetEntry = {
  date: '',
  dayName: '',
  hours: 0.0,
  project: '',
  projectCategory: '',
  task: '',
  comments: '',
};
