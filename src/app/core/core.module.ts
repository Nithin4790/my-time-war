import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [MainComponent],
})
export class CoreModule {}
