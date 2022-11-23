import React from 'react';

import useToast from '@/application/hooks/common/useToast';
import useScrapForm from '@/application/store/scrap/useScrapForm';
import SelectCategoryWithCreate from '@/components/category/Select/SelectCategoryWithCreate';
import ToastInput from '@/components/common/Toast/ui/Input';
import CreateScrap from '@/components/scrap/Toast/CreateScrap';

interface TypedDetailProps {
  onSubmit?: (value: string) => void;
  type: 'link' | 'text';
}

const TypedDetail = ({ onSubmit, type }: TypedDetailProps) => {
  const { replace } = useToast();
  const { handleScrap } = useScrapForm();

  const props = {
    onSubmit: (value: string) => {
      onSubmit?.(value);
      handleScrap({ type, data: value });
      replace({ content: <SelectCategoryWithCreate /> });
    },
    onBack: () => replace({ content: <CreateScrap /> }),
    label: '링크 입력',
    submit: '다음',
    title: '세부사항 입력',
  };

  return type === 'link' ? <ToastInput {...props} type={'input'} /> : <ToastInput {...props} type={'textarea'} />;
};

export default TypedDetail;
