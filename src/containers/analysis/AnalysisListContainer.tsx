import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import PersonalMoodContent from '@/components/analysis/PersonalMoodContent';
import RevisitContent from '@/components/analysis/RevisitContent';
import TagAnalysisContent from '@/components/analysis/TagAnalysisContent';
import TextAnalysisContent from '@/components/analysis/TextAnalysisContent';

const AnalysisListContainer = () => {
  const mock = Array(5)
    .fill(0)
    .map((_, idx) => ({ text_count: idx, text_rate: idx, text_word: `단어_${idx}` }));

  mock.sort((l, r) => r.text_count - l.text_count);

  return (
    <div
      css={css`
        height: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 24px;
      `}
    >
      <div
        css={css`
          position: absolute;
          overflow: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      >
        <div css={CSSAnalysisListContainer}>
          <TagAnalysisContent />
          <div css={CSSBottomLine} />
          <PersonalMoodContent />
          <div css={CSSBottomLine} />
          <TextAnalysisContent texts={mock} />
          <div css={CSSBottomLine} />
          <RevisitContent />
        </div>
      </div>
    </div>
  );
};

const CSSAnalysisListContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
`;

const CSSBottomLine = (theme: Theme) => css`
  width: 100%;
  height: 8px;
  background-color: ${theme.color.gray10};
`;

export default AnalysisListContainer;
