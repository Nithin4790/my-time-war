import { AuthState } from './../state/auth.state';
import { AuthActions, EAuthActions } from './../actions/auth.actions';
import { initialAuthState } from '../state/auth.state';

export const authReducer = (
  state = initialAuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case EAuthActions.GetAuth: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case EAuthActions.GetAuthSuccess: {
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };
    }
    case EAuthActions.GetAuthFail: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case EAuthActions.GetLogout: {
      return initialAuthState;
    }
    default:
      return state;
  }
};
