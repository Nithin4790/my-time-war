import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/store/state/root.state';
import { GetLogout } from 'src/app/store/actions/auth.actions';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'mt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isLogged: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store$: Store<RootState>,
    private authService: AuthenticationService
  ) {}

  ngDoCheck() {
    if (this.authService.getToken()) {
      this.isLogged = true;
    }
  }

  logoutUser() {
    this.store$.dispatch(new GetLogout());
    this.isLogged = false;
  }
}
