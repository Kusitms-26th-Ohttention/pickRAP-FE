import Image from 'next/image';

import BottomNavigationBase from '@/components/common/Navigation/BottomNavigationBase';

const DeleteBottomNavigation = ({ onClick }: { onClick: () => void }) => {
  return (
    <BottomNavigationBase>
      {(NavCell) => (
        <NavCell onClick={onClick}>
          <Image src={`/icon/trash.svg`} width={19} height={37} />
        </NavCell>
      )}
    </BottomNavigationBase>
  );
};

export default DeleteBottomNavigation;
