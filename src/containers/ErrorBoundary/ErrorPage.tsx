import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { TopNavigation } from '@/components/common/Navigation';

interface ErrorPageProp {
  title?: string;
  subtitle?: string;
  reset: () => void;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const StyledTitle = styled.b`
  ${(p) => p.theme.font.B_POINT_18};
  white-space: pre-line;
  margin-top: 12px;
  text-align: center;
`;

const StyledSubtitle = styled.b`
  ${(p) => p.theme.font.R_BODY_14};
  white-space: pre-line;
  text-align: center;
`;

const ErrorPage = ({ title = '앗!', subtitle = '일시적인 오류가 발생했어요.', reset }: ErrorPageProp) => {
  const router = useRouter();
  return (
    <StyledWrapper>
      <TopNavigation
        onClick={() => {
          router.replace('/').then(reset);
        }}
      >
        되돌아가기
      </TopNavigation>
      <div
        css={css`
          //margin: auto;
          margin-top: 16vh;
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        <Image src={'/picture/warn.svg'} width={73} height={99} />
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </div>
    </StyledWrapper>
  );
};

export default ErrorPage;
