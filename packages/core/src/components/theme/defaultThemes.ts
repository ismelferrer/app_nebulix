import type { Theme } from '@staticcms/core';

export const DARK_THEME: Theme = {
  name: 'Dark',
  common: {
    gray: '#334155',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    main: '#1e293b',
    light: '#2c3b55',
    dark: '#0f172a',
    divider: '#2c3b55',
  },
  scrollbar: {
    main: '#1e293b',
    light: '#2c3b55',
  },
  primary: {
    main: '#339ef4',
    light: '#6bb9f7',
    dark: '#0c82e0',
    contrastColor: '#ffffff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastColor: '#ffffff',
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastColor: '#ffffff',
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1',
    contrastColor: '#ffffff',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastColor: '#ffffff',
  },
  codemirror: {
    theme: 'dark',
  },
};

export const LIGHT_THEME: Theme = {
  name: 'Light',
  common: {
    gray: '#d1d5db',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  background: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#f8fafc',
    divider: '#94a3b8',
  },
  scrollbar: {
    main: 'rgba(100, 116, 139, .25)',
    light: 'rgba(100, 116, 139, .25)',
  },
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastColor: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastColor: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastColor: '#ffffff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastColor: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastColor: '#ffffff',
  },
  codemirror: {
    theme: 'light',
  },
};

export const DEFAULT_THEMES: Theme[] = [DARK_THEME, LIGHT_THEME];
