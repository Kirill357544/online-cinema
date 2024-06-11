import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@app/store/types';

export const getCounter = (state: StateSchema) => state.counter;

export const getCounterValue = createSelector(getCounter, (counter) => counter.value);
