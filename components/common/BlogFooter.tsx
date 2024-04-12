'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';

interface BlogFooterProps {
  companyName: string;
  companyDetail: string;
}

const BlogFooter = (props: BlogFooterProps) => {
  const { companyName, companyDetail } = props;

  const MOBILE = useCheckMobile();

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

  if (MOBILE)
    return (
      <FooterContainer>
        <MobileFooterWrap>{footerMain()}</MobileFooterWrap>
      </FooterContainer>
    );
  else
    return (
      <FooterContainer>
        <FooterWrapper>{footerMain()}</FooterWrapper>
      </FooterContainer>
    );
};

export default BlogFooter;

const MadeWithPalms = styled.p`
  cursor: default;
  line-height: normal;
  letter-spacing: -0.005rem;
  color: #8c8c8c;
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 72rem;
`;

const MobileFooterWrap = styled(FooterWrapper)`
  margin-left: 2rem;
`;

const CompanyName = styled.p`
  line-height: normal;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.colors.grey_1000};
  font-family: 'Pretendard';
  font-size: 1.5rem;
  font-weight: 600;
  font-style: normal;
`;

const CompanyDetail = styled.p`
  margin: 1.2rem 0 2.8rem;

  line-height: 1.95rem;
  letter-spacing: -0.005rem;
  white-space: pre-line;

  color: #8c8c8c;
  font-family: 'Pretendard';
  font-size: 1.3rem;
  font-weight: 400;
  font-style: normal;
`;

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  justify-content: center;

  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};

  padding: 7.2rem 0;
  width: 100%;
`;

const LandingPageLink = styled(Link)`
  text-decoration: underline;
  line-height: normal;
  letter-spacing: -0.005rem;
  color: #8c8c8c;
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-weight: 400;
  font-style: normal;
`;
