import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

//Angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

//App imports
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { MainComponent } from './components/main/main.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';

const routes: Routes = [
  { path: 'profile', pathMatch: 'full', component: ProfileComponent },
  { path: 'timesheet', pathMatch: 'full', component: TimesheetComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProfileImageComponent,
    MainComponent,
    ProfileInfoComponent,
    ProfileComponent,
    StatsComponent,
    PiechartComponent,
    TimesheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
