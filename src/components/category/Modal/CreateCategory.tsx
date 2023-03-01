import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { ERR_MESSAGE } from '@/application/utils/constant';
import InputModal from '@/components/common/Modal/Input';

interface CreateCategoryProps {
  onSubmit?: (category: string, errorFn: Dispatch<SetStateAction<boolean>>) => void;
  errMsg?: string;
  defaultValue?: string;
}

// TODO error handler로 에러 메세지 관리
const CreateCategory = ({ onSubmit, errMsg = ERR_MESSAGE.DUPLICATED_TITLE, defaultValue }: CreateCategoryProps) => (
  <InputModal title={'카테고리명'} errMsg={errMsg} onSubmit={onSubmit} defaultValue={defaultValue} />
);

export default CreateCategory;
