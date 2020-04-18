import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PiechartComponent } from './components/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PiechartComponent],
  imports: [CommonModule, ChartsModule],
  exports: [MaterialModule, PiechartComponent],
})
export class SharedModule {}
