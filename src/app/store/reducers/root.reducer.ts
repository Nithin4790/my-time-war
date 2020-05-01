import { RootState } from './../state/root.state';
import { authReducer } from './auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer: ActionReducerMap<RootState, any> = {
  authState: authReducer,
};
