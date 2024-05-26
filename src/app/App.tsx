import { FC } from 'react';

import './styles/styles.css';
import { Spinner } from '@shared/ui/Spinner';

export const App: FC = () => {
  return (
    <>
      <h1 className='one'>Online-cinema</h1>
      <h1 className='two'>Online-cinema</h1>
      <Spinner />
    </>
  );
};
