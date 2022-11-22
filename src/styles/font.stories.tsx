import styled from '@emotion/styled';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Design System/Font',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<any>;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  background-color: #262626;
  color: white;
`;

const StyledH1 = styled.h1`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 700;
  color: ${(p) => p.theme.color.white01};
`;

const StyledH2 = styled.h2`
  margin: 1.4em 0 12px;
  font-size: 16px;
  font-weight: 700;
  color: ${(p) => p.theme.color.white01};
  padding-bottom: 4px;
  border-bottom: 1px solid ${(p) => p.theme.color.white01};
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: #eaeaea;
`;

const H1 = styled.p`
  ${({ theme }) => theme.font.B_BODY_20}
`;
const H2 = styled.p`
  ${({ theme }) => theme.font.B_BODY_16}
`;
const H3 = styled.p`
  ${({ theme }) => theme.font.M_BODY_14}
`;
const H4 = styled.p`
  ${({ theme }) => theme.font.R_BODY_12}
`;

const SCoreH1 = styled.p`
  ${({ theme }) => theme.font.B_POINT_20}
`;

const Template: ComponentStory<any> = () => {
  return (
    <StyledWrapper>
      <StyledH1>Design System : Font</StyledH1>
      <StyledSection>
        <StyledH2>Noto Sans KR</StyledH2>
        <H1>H1 제목</H1>
        <H2>H2 Headline</H2>
        <H3>H3 Headline</H3>
        <H4>H4 Headline</H4>
      </StyledSection>
      <StyledH2>SCoreDream</StyledH2>
      <SCoreH1>Score H1 제목</SCoreH1>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
