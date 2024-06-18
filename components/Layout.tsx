'use client';

import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import StyledComponentsRegistry from '@/utils/lib/registry';

const inter = Inter({ subsets: ['latin'] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
          <GoogleAnalytics gaId={GA_ID} />
          <div id="modal-root"></div>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </body>
  );
};

export default Layout;
