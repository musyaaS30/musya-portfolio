import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'theme';

const applyThemeToDOM = (isDark) => {
  const root = document.documentElement;
  const body = document.body;

  if (isDark) {
    root.classList.add('dark', 'dark-mode');
    body.classList.add('dark', 'dark-mode');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark', 'dark-mode');
    body.classList.remove('dark', 'dark-mode');
    root.style.colorScheme = 'light';
  }
};

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;

  try {
    const saved = localStorage.getItem(THEME_KEY);
    // If explicitly saved as dark, use dark; otherwise default to false (light mode)
    if (saved === 'dark') {
      return true;
    }
  } catch (e) {
    console.error('Error reading localStorage theme:', e);
  }

  // Default to light mode on first open
  return false;
};

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const initial = getInitialTheme();
    // Synchronously apply initial theme to avoid any flash of unstyled theme
    if (typeof window !== 'undefined') {
      applyThemeToDOM(initial);
    }
    return initial;
  });

  // Ensure DOM is in sync on mount
  useEffect(() => {
    applyThemeToDOM(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const next = !prev;
      applyThemeToDOM(next);
      try {
        localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
        // Dispatch event for components like dotGrid canvas
        window.dispatchEvent(
          new CustomEvent('themeChange', { detail: { isDark: next } })
        );
      } catch (e) {
        console.error('Error saving localStorage theme:', e);
      }
      return next;
    });
  }, []);

  return { isDarkMode, toggleDarkMode };
};
