import { Credential } from './../../core/models/credentials.model';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './../../core/services/authentication.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  LoginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Login Page] GetAuth'),
      exhaustMap((payload: Credential) =>
        this.authService.getAuthToken(payload).pipe(
          map((auth) => ({
            type: '[Login Page] GetAuthSuccess',
            payload: auth.jwt,
          })),
          catchError((err) =>
            of({
              type: '[Login Page] GetAuthFail',
              payload: this.authService.handleError(err),
            })
          )
        )
      )
    )
  );

  LogInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Login Page] GetAuthSuccess'),
        map((jwt: string) => {
          this.cookieService.set('mytime', jwt);
          this.router.navigateByUrl('/dashboard');
        })
      ),
    { dispatch: false }
  );

  Logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Login Page] GetLogout'),
        map(() => {
          this.cookieService.delete('mytime');
        })
      ),
    { dispatch: false }
  );
}
