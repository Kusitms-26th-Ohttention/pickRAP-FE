import type { NextPage } from 'next';
import React from 'react';

import useToast from '@/application/hooks/useToast';
import withNavigation from '@/containers/HOC/withNavigation';

const Scrap: NextPage = () => {
  const { show, replace } = useToast();

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
                <button>world</button>
                <button onClick={() => replace({ content: "I'm replaced!" })}>replace</button>
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
