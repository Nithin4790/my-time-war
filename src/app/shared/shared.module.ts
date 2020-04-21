import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PiechartComponent } from './components/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { ResetButtonComponent } from './components/reset-button/reset-button.component';

@NgModule({
  declarations: [PiechartComponent, SubmitButtonComponent, ResetButtonComponent],
  imports: [CommonModule, ChartsModule, LayoutModule, FlexLayoutModule, ReactiveFormsModule, MaterialModule],
  exports: [
    MaterialModule,
    PiechartComponent,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SubmitButtonComponent,
    ResetButtonComponent,
  ],
})
export class SharedModule {}
