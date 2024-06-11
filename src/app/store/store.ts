import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from '@entities/Counter';

import { StateSchema } from './types';

export function configureAppStore() {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
  };

  return (
    configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    })
  );
}
