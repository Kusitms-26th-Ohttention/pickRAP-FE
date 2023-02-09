import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

interface RevisitTitleProps {
  active: boolean;
}

const RevisitTitle = ({ active }: RevisitTitleProps) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
      `}
    >
      <div css={CSSYellowBall(active)} />
      <p css={CSSRevisitTitleDetail(active)}>&lsquo;방문하지 않은&rsquo;</p>
      <p css={CSSRevisitTitle(active)}>콘텐츠가 있어요</p>
    </div>
  );
};

const CSSYellowBall = (active: boolean) =>
  css`
    position: absolute;
    border-radius: 100%;
    background-color: #f6d936;
    z-index: 0;
    bottom: 11px;
    width: ${active ? '19px' : '12px'};
    height: ${active ? '19px' : '12px'};
  `;

const CSSRevisitTitleDetail = (active: boolean) => (theme: Theme) =>
  css`
    position: relative;
    color: ${theme.color.black01};
    margin: 0 10px 0 5px;
    ${active ? theme.font.B_POINT_22 : theme.font.B_POINT_18};
  `;

const CSSRevisitTitle = (active: boolean) => (theme: Theme) =>
  css`
    ${theme.font.M_POINT_16};
    color: ${theme.color.gray03};
    margin-top: ${active ? '6px' : '2px'};
  `;

export default RevisitTitle;
