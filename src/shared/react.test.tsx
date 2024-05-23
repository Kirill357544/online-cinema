import { fireEvent, screen, render } from '@testing-library/react';

it('should be mount', () => {
  render(<button data-testid='button'>Click</button>);
  expect(screen.getByTestId('button')).toBeInTheDocument();
});

it('should call onClick callback', () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick} data-testid='button'>Click</button>);
  fireEvent.click(screen.getByTestId('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
