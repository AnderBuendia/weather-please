import { useBrowserStore } from '@Lib/context/browser-store.context';
import { ThemeMode } from '@Enums/theme-mode.enum';

export interface BrowserStorageService {
  toggleDarkMode: () => void;
  theme: ThemeMode;
}

export const useBrowserStorage = (): BrowserStorageService => {
  return useBrowserStore();
};
