import { Authentication } from './../../core/models/authentication.model';
import { createAction, props } from '@ngrx/store';

export const getAuth = createAction('[Login Page] GetAuth');
export const getAuthSuccess = createAction(
  '[Login Page] GetAuthSuccess',
  props<Authentication>()
);
export const getAuthFail = createAction(
  '[Login Page] GetAuthFail',
  props<{ err: string }>()
);
