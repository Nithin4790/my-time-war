import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // stations: stationsReducer,
  // percentiles: percentilesReducer,
  // authentication: authenticationReducer
});

// Infer whatever gets returned from rootReducer and use it as the type of the root state
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

//   export const selectStationsReducer = (state: RootState) => state.stations
//   export const selectPercentilesReducer = (state: RootState) => state.percentiles
//   export const selectAuthenticationReducer = (state: RootState) => state.authentication
