import { fireEvent, screen, render } from '@testing-library/react';

import { PlusIcon } from '@shared/ui/Icons';

import { IconButton } from './IconButton';

describe('Button component', () => {
  it('should be mount', () => {
    render(<IconButton data-testid='icon-button' icon={<PlusIcon />} />);
    expect(screen.getByTestId('icon-button')).toBeInTheDocument();
  });

  it('should have contained class by default', () => {
    render(<IconButton data-testid='icon-button' icon={<PlusIcon />} />);
    expect(screen.getByTestId('icon-button')).toHaveClass('contained');
  });

  it('should have outline class', () => {
    render(<IconButton variant='outlined' data-testid='icon-button' icon={<PlusIcon />} />);
    expect(screen.getByTestId('icon-button')).toHaveClass('outlined');
  });

  it('should be disabled', () => {
    render(<IconButton disabled data-testid='icon-button' icon={<PlusIcon />} />);
    expect(screen.getByTestId('icon-button')).toBeDisabled();
  });

  it('should be loading', () => {
    render(<IconButton loading data-testid='icon-button' icon={<PlusIcon />} />);
    expect(screen.getByTestId('icon-button')).toHaveClass('loading');
    expect(screen.getByTestId('icon-button')).toBeDisabled();
  });

  it('should call onClick callback', () => {
    const handleClick = jest.fn();
    render(<IconButton onClick={handleClick} data-testid='icon-button' icon={<PlusIcon />} />);
    fireEvent.click(screen.getByTestId('icon-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should NOT call onClick callback when button is disabled', () => {
    const handleClick = jest.fn();
    render(<IconButton disabled onClick={handleClick} data-testid='icon-button' icon={<PlusIcon />} />);
    fireEvent.click(screen.getByTestId('icon-button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
