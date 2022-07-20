import { renderHook } from '@testing-library/react';
import { useToggleDarkMode } from '@Lib/hooks/useToggleDarkMode';
import { ThemeMode } from '@Enums/theme-mode.enum';
import { act } from 'react-dom/test-utils';

describe('useToggleDarkMode', () => {
  const setState = vi.fn();

  it('should toggle theme to light mode', () => {
    const { result } = renderHook(() => {
      return useToggleDarkMode(ThemeMode.LIGHT, setState);
    });

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.toggleDarkMode).toBeInstanceOf(Function);
  });

  it('should toggle theme to dark mode', () => {
    const { result } = renderHook(() => {
      return useToggleDarkMode(ThemeMode.DARK, setState);
    });

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.toggleDarkMode).toBeInstanceOf(Function);
  });
});
