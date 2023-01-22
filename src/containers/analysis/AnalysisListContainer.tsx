import { css } from '@emotion/react';

import PersonalMoodContent from '@/components/analysis/PersonalMoodContent';
import RevisitContent from '@/components/analysis/RevisitContent';
import TagAnalysisContent from '@/components/analysis/TagAnalysisContent';
import TextAnalysisContent from '@/components/analysis/TextAnalysisContent';

const AnalysisListContainer = () => {
  return (
    <div
      css={(theme) => css`
        height: 100%;
        overflow: hidden;
        position: relative;
        background-color: ${theme.color.gray10};
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
          <PersonalMoodContent />
          <TextAnalysisContent />
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

export default AnalysisListContainer;
