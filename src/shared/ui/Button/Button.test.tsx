import { fireEvent, screen, render } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('should be mount', () => {
    render(<Button data-testid='button'>Click</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('should have contained class by default', () => {
    render(<Button data-testid='button'>Click</Button>);
    expect(screen.getByTestId('button')).toHaveClass('contained');
  });

  it('should have outline class', () => {
    render(<Button variant='outlined' data-testid='button'>Click</Button>);
    expect(screen.getByTestId('button')).toHaveClass('outlined');
  });

  it('should be disabled', () => {
    render(<Button disabled data-testid='button'>Click</Button>);
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  it('should be loading', () => {
    render(<Button loading data-testid='button'>Click</Button>);
    expect(screen.getByTestId('button')).toHaveClass('loading');
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  it('should call onClick callback', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} data-testid='button'>Click</Button>);
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should NOT call onClick callback when button is disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick} data-testid='button'>Click</Button>);
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
