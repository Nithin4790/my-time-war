import { AuthState } from './../state/auth.state';
import { Authentication } from './../../core/models/authentication.model';
import { Action, createReducer, on } from '@ngrx/store';
import { initialAuthState } from '../state/auth.state';
import * as AuthActions from '../actions/auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.getAuth, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(AuthActions.getAuthSuccess, (state, payload: Authentication) => ({
    ...state,
    isLoading: false,
    error: null,
    token: payload.jwt,
  })),
  on(AuthActions.getAuthFail, (state, payload: { err: string }) => ({
    ...state,
    isLoading: false,
    error: payload,
    token: null,
  }))
);

export function getAuthReducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
