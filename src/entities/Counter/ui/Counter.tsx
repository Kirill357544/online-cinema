import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice';

export const Counter: FC = () => {
  const [increaseValue, setIncreaseValue] = useState(0);

  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(counterActions.increment())}>Increase</button>
      <button onClick={() => dispatch(counterActions.decrement())}>Decrease</button>
      <button onClick={() => dispatch(counterActions.resetValue())}>Reset</button>
      <input type='number' value={increaseValue} onChange={(event) => setIncreaseValue(Number(event.target.value))} />
      <button onClick={() => dispatch(counterActions.increaseByValue(increaseValue))}>Increment by {increaseValue}</button>
    </div>
  );
};
