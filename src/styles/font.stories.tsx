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
`;

const H1 = styled.p`
  ${({ theme }) => theme.font.B_BODY_10}
`;
const H2 = styled.p`
  ${({ theme }) => theme.font.B_POINT_12}
`;
const H3 = styled.p`
  ${({ theme }) => theme.font.R_BODY_10}
`;
const H4 = styled.p`
  ${({ theme }) => theme.font.SB_POINT_12}
`;

const Template: ComponentStory<any> = () => {
  return (
    <StyledWrapper>
      <StyledH1>Design System : Font</StyledH1>
      <StyledSection>
        <StyledH2>Pretendard</StyledH2>
        <H1>H1 Headline</H1>
        <H2>H2 Headline</H2>
        <H3>H3 Headline</H3>

        <div style={{ height: '20px' }}></div>
        <H4>H4 Headline</H4>
      </StyledSection>
      <StyledH2>Barlow Condensed</StyledH2>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
