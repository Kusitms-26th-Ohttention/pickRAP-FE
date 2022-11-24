import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { ERR_MESSAGE } from '@/application/utils/constant';
import InputModal from '@/components/common/Modal/Input';

interface CreateCategoryProps {
  onSubmit?: (category: string, errorFn: Dispatch<SetStateAction<boolean>>) => void;
}

const CreateCategory = ({ onSubmit }: CreateCategoryProps) => (
  <InputModal title={'카테고리명'} errMsg={ERR_MESSAGE.DUPLICATED_TITLE} onSubmit={onSubmit} />
);

export default CreateCategory;
