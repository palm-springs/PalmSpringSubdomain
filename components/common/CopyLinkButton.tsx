'use client';

import React from 'react';
import styled from 'styled-components';

import { IcCopyLink } from '@/public/icons';

interface CopyLinkButtonProp {
  viewType: string;
  onClickAction: () => void;
}

const CopyLinkButton = (prop: CopyLinkButtonProp) => {
  const { viewType, onClickAction } = prop;
  return (
    <LinkBtn className={viewType} onClick={onClickAction}>
      <CopyIcon /> 아티클 링크 복사하기
    </LinkBtn>
  );
};

export default CopyLinkButton;

const LinkBtn = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin: 12rem 0 8rem 0;

  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  padding: 1rem 2rem;

  color: ${({ theme }) => theme.colors.grey_800};
  font-size: 1.5rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Button};
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const CopyIcon = styled(IcCopyLink)`
  border: none;
  width: 1.8rem;
  height: 1.8rem;
`;
