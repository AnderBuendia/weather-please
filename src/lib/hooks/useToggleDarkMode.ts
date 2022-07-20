import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';
import { ThemeMode } from '@Enums/theme-mode.enum';

export function useToggleDarkMode(theme: ThemeMode, setTheme: Dispatch<SetStateAction<ThemeMode>>) {
  document.querySelector('html')?.classList.toggle(ThemeMode.DARK);

  const toggleDarkMode = useCallback(() => {
    if (theme === ThemeMode.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  }, [theme, setTheme]);

  return { toggleDarkMode };
}
