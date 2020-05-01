import { AuthenticationService } from './../../core/services/authentication.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  getAuthEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Login Page] GetAuth'),
      mergeMap(() =>
        this.authService.getAuthToken().pipe(
          map((auth) => ({
            type: '[Login Page] GetAuthSuccess',
            payload: auth,
          })),
          catchError((err) =>
            of({
              type: '[Login Page] GetAuthFail',
              payload: err,
            })
          )
        )
      )
    )
  );
}
