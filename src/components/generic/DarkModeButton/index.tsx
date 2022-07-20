import type { FC } from 'react';
import { useBrowserStorage } from '@Services/storage.service';
import { SunIcon } from '@Components/icons/sun.icon';
import { MoonIcon } from '@Components/icons/moon.icon';
import { ThemeMode } from '@Enums/theme-mode.enum';

const DarkModeButton: FC = () => {
  const { theme, toggleDarkMode } = useBrowserStorage();

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="mr-3 px-4 py-2 h-10 transform-translate-x-2/4 rounded-md bg-gray-700 dark:bg-black dark:text-white hover:opacity-60"
      onClick={handleClick}
    >
      {theme === ThemeMode.DARK ? (
        <SunIcon className="w-5 h-5 fill-current" />
      ) : (
        <MoonIcon className="w-5 h-5 fill-current text-white" />
      )}
    </button>
  );
};

export default DarkModeButton;
