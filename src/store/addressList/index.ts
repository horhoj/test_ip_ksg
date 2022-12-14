import { actions, reducer } from './slice';
import * as selectors from './selectors';
import * as thunks from './thunks';

export const addressListSlice = {
  actions,
  reducer,
  selectors,
  thunks,
} as const;
