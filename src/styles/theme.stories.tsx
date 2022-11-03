import styled from '@emotion/styled';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { theme } from '@/styles/theme';

export default {
  title: 'Design System/Color',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<any>;

const StyledColorWrapper = styled.div`
  margin: 8px 8px 8px 0;
  color: ${(p) => p.theme.color.gray06};
  > *:not(:last-child) {
    margin-bottom: 4px;
  }
  > b {
    display: block;
    font-weight: bold;
    color: ${(p) => p.theme.color.gray05};
  }
`;

const StyledColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

const Color = ({ name, color }: { name: string; color: string }) => {
  return (
    <StyledColorWrapper>
      <StyledColorBlock color={color} />
      <b>{name}</b>
      <p>{color}</p>
    </StyledColorWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #262626;
  h1 {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 700;
    color: ${(p) => p.theme.color.white01};
  }
  h2 {
    margin: 1.4em 0 12px;
    font-size: 16px;
    font-weight: 700;
    color: ${(p) => p.theme.color.white01};
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorList = ({
  colors,
  title,
  namespace,
  excludeNamespace,
}: {
  colors: Record<string, string>;
  title?: string;
  namespace?: string;
  excludeNamespace?: string;
}) => (
  <>
    <h3>{title || namespace}</h3>
    <StyledRow>
      {Object.entries(colors)
        .filter(([key]) => (namespace ? key.includes(namespace) : true))
        .filter(([key]) => (excludeNamespace ? !key.includes(excludeNamespace) : true))
        .map(([key, value]) => (
          <Color key={key} name={key} color={value} />
        ))}
    </StyledRow>
  </>
);

const Template: ComponentStory<any> = () => {
  const { color } = theme;

  return (
    <StyledWrapper>
      <h1>Design System : Color</h1>
      <section>
        <h2>Color</h2>
        <ColorList colors={color} namespace="white" />
        <ColorList colors={color} namespace="gray" />
        <ColorList colors={color} namespace="black" />
        <ColorList colors={color} namespace="red" />
        <ColorList colors={color} namespace="blue" />
      </section>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
