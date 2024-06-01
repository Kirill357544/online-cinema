import { screen, render } from '@testing-library/react';

import { Badge } from './Badge';

describe('Button component', () => {
  it('should be mount', () => {
    render(<Badge data-testid='badge' title='Badge' />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('should have neutral class by default', () => {
    render(<Badge data-testid='badge' title='Badge' />);
    expect(screen.getByTestId('badge')).toHaveClass('neutral');
  });

  it('should have success class', () => {
    render(<Badge data-testid='badge' title='Badge' variant='success' />);
    expect(screen.getByTestId('badge')).toHaveClass('success');
  });

  it('should have additional class', () => {
    render(<Badge data-testid='badge' title='Badge' className='additional' />);
    expect(screen.getByTestId('badge')).toHaveClass('additional');
  });
});
