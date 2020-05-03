import { Credential } from './../../core/models/credentials.model';
import { Authentication } from './../../core/models/authentication.model';
import { createAction, props, Action } from '@ngrx/store';

export enum EAuthActions {
  GetAuth = '[Login Page] GetAuth',
  GetAuthSuccess = '[Login Page] GetAuthSuccess',
  GetAuthFail = '[Login Page] GetAuthFail',
  GetLogout = '[Login Page] GetLogout',
}

export class GetAuth implements Action {
  public readonly type = EAuthActions.GetAuth;
  constructor(public payload: Credential) {}
}

// tslint:disable: max-classes-per-file
export class GetAuthSuccess implements Action {
  public readonly type = EAuthActions.GetAuthSuccess;
  constructor(public payload: string) {}
}

export class GetAuthFail implements Action {
  public readonly type = EAuthActions.GetAuthFail;
  constructor(public payload: string) {}
}

export class GetLogout implements Action {
  public readonly type = EAuthActions.GetLogout;
}

export type AuthActions = GetAuth | GetAuthSuccess | GetAuthFail | GetLogout;
