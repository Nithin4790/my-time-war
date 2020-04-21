import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimesheetEntry } from 'src/app/core/models/timesheet-entry.model';

interface TimesheetEntriesState {
  isLoading: boolean;
  error: string | null;
  timesheetEntries: TimesheetEntry[];
}

export const timesheetEntriesInitialState: TimesheetEntriesState = {
  isLoading: false,
  error: null,
  timesheetEntries: [],
};

const timesheetEntries = createSlice({
  name: 'timesheetEntries',
  initialState: timesheetEntriesInitialState,
  reducers: {
    getTimesheetEntiesStart(state: TimesheetEntriesState) {
      state.isLoading = true;
    },
    getTimesheetEntiesFailed(state: TimesheetEntriesState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getTimesheetEntiesSuccess(state: TimesheetEntriesState, action: PayloadAction<TimesheetEntry[]>) {
      state.isLoading = false;
      state.timesheetEntries = action.payload;
      state.error = null;
    },
  },
});

export const {
  getTimesheetEntiesStart,
  getTimesheetEntiesFailed,
  getTimesheetEntiesSuccess,
} = timesheetEntries.actions;

export default timesheetEntries.reducer;
