'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { NavListOnly } from '@/types/blogHeader';

const SideBarNav = (props: NavListOnly) => {
  const { navList } = props;

  return (
    <BlogNavContainer>
      {navList &&
        navList.map(({ navUrl, name, isPage }) => (
          <NavBtn key={navUrl} type="button">
            <NavLink href={isPage ? `/${navUrl}` : `${navUrl}`} target={isPage ? '_self' : '_blank'}>
              {name}
            </NavLink>
          </NavBtn>
        ))}
    </BlogNavContainer>
  );
};

export default SideBarNav;

const NavLink = styled(Link)`
  ${({ theme }) => theme.mobileFonts.Body1_Regular};

  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.grey_900};
  font-size: 1.5rem;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-weight: 500;
`;

const BlogNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const NavBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 1.2rem 2.4rem;
  width: 100%;
`;
