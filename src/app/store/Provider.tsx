import { FC, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { configureAppStore } from './store';

export type ProviderProps = {
  children: ReactNode;
};

export const Provider: FC<ProviderProps> = ({ children, ...props }) => {
  const store = configureAppStore();

  return (
    <ReduxProvider store={store} {...props}>
      {children}
    </ReduxProvider>
  );
};
