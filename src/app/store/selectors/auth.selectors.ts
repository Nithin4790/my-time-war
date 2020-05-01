import { createSelector } from '@ngrx/store';
import { AuthState } from './../state/auth.state';
import { RootState } from '../state/root.state';

export const selectAuthState = (state: RootState) => state.authState;

export const selectAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);
