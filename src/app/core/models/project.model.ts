export interface Project {
  position: number;
  project: string;
  projectCategory: string;
  task: string;
}

export function getTimesheetEntryInitialState(): Project {
  return {
    ...DEFAULT_PROJECT,
  };
}

export const DEFAULT_PROJECT: Project = {
  position: 0,
  project: '',
  projectCategory: '',
  task: '',
};
