import { atom } from 'recoil';

type EditPageState = EditPage[];

export const editPageState = atom<EditPageState>({
  key: 'EditPageState',
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newState) => {
        console.debug('EditPage state ::', newState);
      });
    },
  ],
});
