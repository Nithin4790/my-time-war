import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module imports
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TimesheetModule } from './modules/timesheet/timesheet.module';
import { ProjectModule } from './modules/project/project.module';
import { LoginModule } from './modules/login/login.module';

// Module ngrx
import { StoreModule } from '@ngrx/store';
import * as AuthReducer from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './store/reducers/root.reducer';

// Services
import { AuthenticationService } from './core/services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './core/services/auth-guard.service';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    TimesheetModule,
    ProjectModule,
    LoginModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
