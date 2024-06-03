import { screen, render, fireEvent } from '@testing-library/react';

import { Rating } from './Rating';

describe('Rating component', () => {
  it('should be mount', () => {
    render(<Rating data-testid='rating' rating={5} onChange={() => null} />);
    expect(screen.getByTestId('rating')).toBeInTheDocument();
  });

  it('size should be 10', () => {
    const SIZE = 10;
    render(<Rating data-testid='rating' size={SIZE} rating={1} onChange={() => null} />);
    expect((screen.getByTestId('rating')).querySelectorAll('button').length === SIZE);
  });

  it('should call onChange callback function', () => {
    const handleChange = jest.fn();
    render(<Rating data-testid='rating' rating={1} onChange={handleChange} />);
    fireEvent.click(screen.getByTestId('rating').querySelector('button') as HTMLButtonElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
