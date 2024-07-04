'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { HamburgerIcon } from '@/public/icons';
import { HeaderProps } from '@/types/blogHeader';

import BlogNav from './BlogNav';
import HeaderLogo from './HeaderLogo';
import SideBar from './SideBar';

const BlogHeader = (props: HeaderProps) => {
  const { logo, blogName, navList, isDeviceMobile } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ifScrollPositionZero, setIfScrollPositionZero] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIfScrollPositionZero(position === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = useCheckMobile(isDeviceMobile);

  const sidebarToggle = () => setIsMenuOpen(!isMenuOpen);

  if (isMobile)
    return (
      <BlogHeaderContainer className="mobile" $ifscrollpositionzero={ifScrollPositionZero}>
        <HeaderLogo logo={logo} blogName={blogName} />
        <BlurBackground className={isMenuOpen ? 'blur' : ''} onClick={sidebarToggle} />
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navList={navList} />
        <MenuIcon type="button" onClick={sidebarToggle} />
      </BlogHeaderContainer>
    );
  else
    return (
      <BlogHeaderContainer $ifscrollpositionzero={ifScrollPositionZero}>
        <HeaderLogo logo={logo} blogName={blogName} />
        <BlogNav blogName={blogName} navList={navList} />
      </BlogHeaderContainer>
    );
};

export default BlogHeader;

const BlurBackground = styled.div`
  transition: 0.2s ease-in-out;
  &.blur {
    position: fixed;
    top: 0;
    right: 0;
    opacity: 1;
    z-index: 2;
    background-color: rgba(64, 71, 79, 0.5);
    width: 100vw;
    height: 100vh;
  }
`;

const BlogHeaderContainer = styled.div<{ $ifscrollpositionzero: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  transition: height 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};

  background: ${({ theme }) => theme.colors.grey_0};
  padding: 0 max(calc((100vw - 100rem) / 2), 2.4rem);
  width: 100vw;
  min-width: 72rem;
  height: 6rem;
  ${({ $ifscrollpositionzero }) => $ifscrollpositionzero && `height:7.2rem;border-color:transparent;`}

  &.mobile {
    padding: 0 1.6rem 0 2.4rem;
    min-width: 0;
  }
`;

const MenuIcon = styled(HamburgerIcon)`
  border: none;
  width: 4rem;
  height: 4rem;
`;
