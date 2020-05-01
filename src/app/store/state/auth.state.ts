import { Authentication } from './../../core/models/authentication.model';

export interface AuthState {
  isLoading: boolean;
  error: string | null;
  token: string;
}

export const initialAuthState: AuthState = {
  isLoading: false,
  error: null,
  token: null,
};
