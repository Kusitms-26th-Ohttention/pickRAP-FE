import { css } from '@emotion/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// TODO 타입 지정 위치 변경
interface AnalysisDataProps {
  testData: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
    }[];
  };
  chartOption: {
    plugins: {
      legend: {
        display: boolean;
      };
    };
  };
}

const TagAnalysisContainer = ({ testData, chartOption }: AnalysisDataProps) => {
  return (
    <>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 100%;
            background-color: #f6d936;
            z-index: 0;
            top: 48px;
          `}
        />
        <p
          css={(theme) => css`
            position: relative;
            ${theme.font.B_POINT_18};
            color: ${theme.color.black01};
            margin: 0 10px 0 4px;
          `}
        >
          #IT
        </p>
        <p
          css={(theme) => css`
            ${theme.font.M_POINT_16};
            color: ${theme.color.gray03};
          `}
        >
          를 가장 많이 태그했어요.
        </p>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        `}
      >
        <div
          css={css`
            width: 182px;
            height: 182px;
          `}
        >
          <Doughnut data={testData} options={chartOption} />
        </div>
        {/* <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <div
              css={css`
                width: 10px;
                height: 10px;
                border-radius: 100%;
                background-color: #f6d936;
              `}
            />
            <p
              css={(theme) => css`
                ${theme.font.R_BODY_12};
                color: ${theme.color.gray04};
              `}
            >
              #
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default TagAnalysisContainer;
