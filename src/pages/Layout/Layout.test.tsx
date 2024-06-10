import { screen, render } from '@testing-library/react';

import { Layout } from './Layout';

describe('Button component', () => {
  it('should be mount', () => {
    render(<Layout data-testid='layout' />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('should be mount renderProp', () => {
    render(<Layout
      data-testid='layout'
      renderHeader={() => <div data-testid='header' />}
      renderLeftSidebar={() => <div data-testid='left-sidebar' />}
      renderMain={() => <div data-testid='main' />}
      renderRightSidebar={() => <div data-testid='right-sidebar' />}
      renderFooter={() => <div data-testid='footer' />}
    />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('left-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('right-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
