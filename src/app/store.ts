import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { collectiveApi, rtkQueryErrorLogger } from '../features/collective/api';

export const store = configureStore({
  reducer: {
    [collectiveApi.reducerPath]: collectiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    collectiveApi.middleware,
    rtkQueryErrorLogger
  ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
