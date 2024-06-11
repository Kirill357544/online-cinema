import { createSlice } from '@reduxjs/toolkit';

export type CounterSchema = {
  value: number;
};

const initialState: CounterSchema = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByValue: (state, { payload } : { payload: number }) => {
      state.value = state.value + payload;
    },
    resetValue: (state) => {
      state.value = initialState.value;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
