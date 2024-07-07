'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import StyledComponentsRegistry from '@/utils/lib/registry';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
          <div id="modal-root"></div>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </body>
  );
};

export default Layout;
