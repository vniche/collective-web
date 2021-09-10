import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { collectiveApi } from '../features/collective/api';

export const store = configureStore({
  reducer: {
    [collectiveApi.reducerPath]: collectiveApi.reducer,
  },
  middleware: (gDM) => gDM().concat(collectiveApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
