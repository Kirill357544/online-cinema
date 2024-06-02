import { fireEvent, screen, render } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('TextField component', () => {
  it('should be mount', () => {
    render(<Textarea data-testid='textarea' />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<Textarea data-testid='textarea' disabled />);
    expect(screen.getByTestId('textarea')).toBeDisabled();
  });

  it('should have value `Some value`', () => {
    render(<Textarea data-testid='textarea' defaultValue='Some value' />);
    expect(screen.getByTestId('textarea')).toHaveValue('Some value');
  });

  it('should call onChange callback when value is change', () => {
    render(<Textarea data-testid='textarea' defaultValue='Some value' />);
    fireEvent.change(screen.getByTestId('textarea'), { target: { value: 'Some value' } });
    expect(screen.getByTestId('textarea')).toHaveValue('Some value');
  });
});
