import { configureStore } from '@reduxjs/toolkit';
import { api } from 'shared/lib/api';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: {
    rootReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
