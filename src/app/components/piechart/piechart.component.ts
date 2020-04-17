import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit {
  public pieChartLabels = ['WFRM', 'WFONE', 'PSU', 'WFIM'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  public dynwidth: number;
  constructor() {}

  ngOnInit(): void {
    this.dynwidth = 500;
  }
}
