'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import useGetCategory from '@/hooks/useGetCategory';

interface CategoryBtnBarProps {
  LiteralList: string[];
  isMobile: boolean;
}
const CategoryBtnBar = (props: CategoryBtnBarProps) => {
  const { category } = useParams();
  const { LiteralList, isMobile } = props;
  const SELECTED = useGetCategory();

  const CATEGORY_LIST = LiteralList.map((eachCategory) => {
    if (isMobile)
      return (
        <MobileCategoryBtn
          href={`/category/${eachCategory}`}
          key={eachCategory}
          className={eachCategory === decodeURI(category) ? 'selected' : ''}>
          {eachCategory}
        </MobileCategoryBtn>
      );
    else
      return (
        <CategoryBtn
          href={{ pathname: `/category/${eachCategory}`, hash: '/' }}
          key={eachCategory}
          className={eachCategory === decodeURI(category) ? 'selected' : ''}>
          {eachCategory}
        </CategoryBtn>
      );
  });

  if (isMobile)
    return (
      <CategoryBtnBarContainer className="mobile">
        <MobileCategoryBtn href={`/`} className={SELECTED === 'home' ? 'selected' : ''}>
          전체
        </MobileCategoryBtn>
        {CATEGORY_LIST}
      </CategoryBtnBarContainer>
    );
  else
    return (
      <CategoryBtnBarContainer id="/">
        <CategoryBtn href={{ pathname: `/`, hash: '/' }} className={SELECTED === 'home' ? 'selected' : ''}>
          전체
        </CategoryBtn>
        {CATEGORY_LIST}
      </CategoryBtnBarContainer>
    );
};

export default CategoryBtnBar;

const CategoryBtnBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: flex-start;
  padding: 8rem 0 4.8rem;
  width: 100%;
  max-width: 124rem;

  &.mobile {
    padding: 2.8rem 0 2.2rem 0;
    width: 100%;
  }
`;

const CategoryBtnDefault = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey_300};
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_700};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }
  &.selected {
    background-color: ${({ theme }) => theme.colors.grey_900};
    color: ${({ theme }) => theme.colors.grey_0};
  }
`;

const CategoryBtn = styled(CategoryBtnDefault)`
  ${({ theme }) => theme.fonts.Body1_Regular};
  border-radius: 1.4rem;

  padding: 0 2rem;
  height: 4.2rem;

  &.selected {
    ${({ theme }) => theme.fonts.Body1_Regular};
  }
`;

const MobileCategoryBtn = styled(CategoryBtnDefault)`
  ${({ theme }) => theme.mobileFonts.Body2_Regular};

  border-radius: 1.2rem;

  padding: 0 1.5rem;
  height: 3.2rem;

  &.selected {
    ${({ theme }) => theme.mobileFonts.Body2_Semibold};
  }
`;
