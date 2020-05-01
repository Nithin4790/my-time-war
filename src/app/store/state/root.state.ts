import { AuthState, initialAuthState } from './auth.state';

export interface RootState {
  authState: AuthState;
}

export const initialRootState: RootState = {
  authState: initialAuthState,
};

export function getInitialState(): RootState {
  return initialRootState;
}
