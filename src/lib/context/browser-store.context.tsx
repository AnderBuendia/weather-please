import type { FC, ReactNode } from 'react';
import { createContext, useState, useContext } from 'react';
import { useToggleDarkMode } from '@Lib/hooks/useToggleDarkMode';
import { ThemeMode } from '@Enums/theme-mode.enum';

interface IBrowserContext {
  toggleDarkMode: () => void;
  theme: ThemeMode;
}

type BrowserStoreProviderProps = {
  children: ReactNode;
};

const BrowserStoreContext = createContext<IBrowserContext>({} as IBrowserContext);

export const useBrowserStore = () => {
  const context = useContext(BrowserStoreContext);

  if (context === undefined || !Object.keys(context).length) {
    throw new Error('useBrowserStore must be used within BrowserStoreProvider');
  }

  return context;
};

export const BrowserStoreProvider: FC<BrowserStoreProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DARK);

  const { toggleDarkMode } = useToggleDarkMode(theme, setTheme);

  const value = {
    toggleDarkMode,
    theme,
  };

  return <BrowserStoreContext.Provider value={value}>{children}</BrowserStoreContext.Provider>;
};

export default BrowserStoreContext;
