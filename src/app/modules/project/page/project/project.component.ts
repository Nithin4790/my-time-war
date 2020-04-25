import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Project } from 'src/app/core/models/project.model';

@Component({
  selector: 'mt-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['select', 'position', 'project', 'projectCategory', 'task'];
  data = Object.assign(SAMPLE_DATA);
  dataSource = new MatTableDataSource(SAMPLE_DATA);
  selection = new SelectionModel<Project>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  checkboxLabel(row?: Project): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  removeSelectedRows() {
    this.selection.selected.forEach((item) => {
      const index: number = this.data.findIndex((d) => d === item);
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<Project>(this.data);
    });
    this.selection = new SelectionModel<Project>(true, []);
  }

  reloadPage() {
    window.location.reload();
  }
}

const SAMPLE_DATA: Project[] = [
  { position: 1, project: 'project1', projectCategory: 'projectCategory1', task: 'task1' },
  { position: 2, project: 'project2', projectCategory: 'projectCategory2', task: 'task2' },
  { position: 3, project: 'project3', projectCategory: 'projectCategory3', task: 'task3' },
  { position: 4, project: 'project4', projectCategory: 'projectCategory4', task: 'task4' },
  { position: 5, project: 'project5', projectCategory: 'projectCategory5', task: 'task5' },
  { position: 6, project: 'project6', projectCategory: 'projectCategory6', task: 'task6' },
  { position: 7, project: 'project7', projectCategory: 'projectCategory7', task: 'task7' },
  { position: 8, project: 'project8', projectCategory: 'projectCategory8', task: 'task8' },
  { position: 9, project: 'project9', projectCategory: 'projectCategory9', task: 'task9' },
  { position: 10, project: 'project10', projectCategory: 'projectCategory10', task: 'task10' },
];
