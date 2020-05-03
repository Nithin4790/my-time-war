import { createSelector } from '@ngrx/store';
import { AuthState } from './../state/auth.state';
import { RootState } from '../state/root.state';

export const selectAuthState = (state: RootState) => state.authState;

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.token;
  }
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.error;
  }
);
