import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      blue10: string;
      black: string;
      gray20: string;
      gray10: string;
      gray05: string;
      gray00: string;
      white: string;
    };
    fonts: {
      main: string;
      code: string;
      h1: string;
      h2: string;
      h3: string;
    };
    fontSizes: {
      h1: string;
      h2: string;
      h3: string;
    };
    spacing: {
      medium: string;
      regular: string;
      small: string;
    };
    borderRadius: string;
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#0500ff',
    blue10: '#edeffb',
    black: '#1c1c1c',
    gray20: '#9e9e9e',
    gray10: '#dfdfdf',
    gray05: '#f5f5f5',
    gray00: '#f0f0f0',
    white: '#ffffff',
  },
  fonts: {
    main: 'Helvetica, Arial, sans-serif',
    code: 'Monaco, Menlo, monospace',
    h1: 'Helvetica, Arial, sans-serif',
    h2: 'Helvetica, Arial, sans-serif',
    h3: 'Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    h1: '20px',
    h2: '16px',
    h3: '16px',
  },
  spacing: {
    medium: '60px',
    regular: '40px',
    small: '20px',
  },
  borderRadius: '4px',
};

export default theme;