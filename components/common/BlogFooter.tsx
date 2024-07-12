'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';

interface BlogFooterProps {
  companyName: string;
  companyDetail: string;
  isDeviceMobile: boolean;
}

const BlogFooter = (props: BlogFooterProps) => {
  const { companyName, companyDetail, isDeviceMobile } = props;

  const isMobile = useCheckMobile(isDeviceMobile);

  const footerMain = () => {
    return (
      <>
        <CompanyName>{companyName}</CompanyName>
        <CompanyDetail>{companyDetail}</CompanyDetail>
        <MadeWithPalms>
          made with <LandingPageLink href={`https://www.palms.blog/`}>palms.blog</LandingPageLink>
        </MadeWithPalms>
      </>
    );
  };

  return (
    <FooterContainer className={isMobile ? 'mobile' : ''}>
      <FooterWrapper>{footerMain()}</FooterWrapper>
    </FooterContainer>
  );
};

export default BlogFooter;

const MadeWithPalms = styled.p`
  cursor: default;
  line-height: normal;
  letter-spacing: -0.005rem;
  color: ${({ theme }) => theme.colors.grey_700};
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 124rem;
`;

const CompanyName = styled.p`
  line-height: 1.6;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.colors.grey_1000};
  font-family: 'Pretendard';
  font-size: 1.5rem;
  font-weight: 600;
  font-style: normal;
`;

const CompanyDetail = styled.p`
  margin: 1.2rem 0 2.8rem;

  line-height: 1.6;
  letter-spacing: -0.005rem;
  white-space: pre-line;

  color: ${({ theme }) => theme.colors.grey_700};
  font-family: 'Pretendard';
  font-size: 1.3rem;
  font-weight: 400;
  font-style: normal;
`;

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  justify-content: center;
  margin-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};
  background: ${({ theme }) => theme.colors.grey_100};

  padding: 7.2rem 2rem 8.4rem 2rem;
  width: 100%;
  &.mobile {
    padding: 4rem 2rem 7.2rem 2rem;
  }
`;

const LandingPageLink = styled(Link)`
  text-decoration: underline;
  line-height: normal;
  letter-spacing: -0.005rem;
  color: ${({ theme }) => theme.colors.grey_700};
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
`;
