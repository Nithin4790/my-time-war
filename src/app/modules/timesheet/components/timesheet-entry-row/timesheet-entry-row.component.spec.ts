import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetEntryRowComponent } from './timesheet-entry-row.component';

describe('TimesheetEntryRowComponent', () => {
  let component: TimesheetEntryRowComponent;
  let fixture: ComponentFixture<TimesheetEntryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetEntryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetEntryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
