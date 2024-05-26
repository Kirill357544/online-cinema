import { screen, render } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Button component', () => {
  it('should be mount', () => {
    render(<Spinner data-testid='spinner' />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should have size="medium" by default', () => {
    render(<Spinner data-testid='spinner' />);
    expect(screen.getByTestId('spinner')).toHaveClass('medium');
  });

  it('should have size="large"', () => {
    render(<Spinner data-testid='spinner' size='large' />);
    expect(screen.getByTestId('spinner')).toHaveClass('large');
  });

  it('should have additional class', () => {
    render(<Spinner data-testid='spinner' className='additional' />);
    expect(screen.getByTestId('spinner')).toHaveClass('additional');
  });
});
