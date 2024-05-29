import { fireEvent, screen, render } from '@testing-library/react';

import { TextField } from './TextField';

describe('TextField component', () => {
  it('should be mount', () => {
    render(<TextField data-testid='text-field' />);
    expect(screen.getByTestId('text-field')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<TextField data-testid='text-field' disabled />);
    expect(screen.getByTestId('text-field')).toBeDisabled();
  });

  it('should have value `Some value`', () => {
    render(<TextField data-testid='text-field' defaultValue='Some value' />);
    expect(screen.getByTestId('text-field')).toHaveValue('Some value');
  });

  it('should call onChange callback when value is change', () => {
    render(<TextField data-testid='text-field' defaultValue='Some value' />);
    fireEvent.change(screen.getByTestId('text-field'), {target: {value: 'Some value'}});
    expect(screen.getByTestId('text-field')).toHaveValue('Some value');
  });
});
