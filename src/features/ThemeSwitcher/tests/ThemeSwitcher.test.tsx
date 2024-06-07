import { screen, render } from '@testing-library/react';

import { ThemeSwitcher } from '../ui/ThemeSwitcher';

describe('ThemeSwitcher component', () => {
  it('should be mount', () => {
    render(<ThemeSwitcher data-testid='theme-switcher' />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });

  it('should have additional class', () => {
    render(<ThemeSwitcher data-testid='theme-switcher' className='additional' />);
    expect(screen.getByTestId('theme-switcher')).toHaveClass('additional');
  });
});
