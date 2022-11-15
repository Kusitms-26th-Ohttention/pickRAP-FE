import type { NextPage } from 'next';
import React from 'react';

import usePopup from '@/application/hooks/usePopup';
import useToast from '@/application/hooks/useToast';
import withNavigation from '@/containers/HOC/withNavigation';

const Scrap: NextPage = () => {
  const { show } = useToast();
  const popup = usePopup();

  return (
    <>
      Scrap With Navigation
      <button> click</button>
      <button
        onClick={() =>
          show({
            id: 2,
            content: (
              <div>
                <button onClick={() => popup('성공했습니다', 'success')}>replace</button>
              </div>
            ),
          })
        }
      >
        show modal
      </button>
    </>
  );
};

export default withNavigation(Scrap);
