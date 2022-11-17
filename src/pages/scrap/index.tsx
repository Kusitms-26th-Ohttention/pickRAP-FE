import type { NextPage } from 'next';
import React from 'react';

import useModal from '@/application/hooks/useModal';
import useToast from '@/application/hooks/useToast';
import UploadButton from '@/components/scrap/UploadButton';
import withNavigation from '@/containers/HOC/withNavigation';

const Scrap: NextPage = () => {
  const { show } = useToast();
  const popup = useModal();

  return (
    <>
      Scrap With Navigation
      <UploadButton />
      <button
        onClick={() =>
          show({
            id: 2,
            content: (
              <div>
                <button onClick={() => popup('성공했습니다')}>replace</button>
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
