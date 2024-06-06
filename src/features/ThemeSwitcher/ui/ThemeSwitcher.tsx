import { FC } from 'react';

import { SunIcon, MoonIcon } from '@shared/ui/Icons';

import { useThemeContext } from '@shared/providers/ThemeProvider';
import { IconButton } from '@shared/ui/IconButton';

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <IconButton
      variant='outlined'
      icon={theme === 'light' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleTheme}
      {...props}
    />
  );
};
