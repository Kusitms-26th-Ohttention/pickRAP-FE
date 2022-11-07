import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { FormEvent, FormHTMLAttributes, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import { AccentButton } from '@/components/common/Button';
import { InputBase } from '@/components/common/Input';

interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  errInput?: string;
}
interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errMsg?: string;
  error?: boolean;
  handleChange?: (t: string) => void;
}
const AuthInput = (props: AuthInputProps) => {
  const { value, handleChange, errMsg, ...rest } = props;

  return (
    <InputBase
      {...rest}
      value={value}
      onChange={(e) => handleChange?.(e.target.value)}
      rightPlaceholder={
        value ? (
          <Image
            alt={'reset'}
            css={css`
              cursor: pointer;
            `}
            src={'/icon/inputReset.svg'}
            width={20}
            height={20}
            onClick={() => handleChange?.('')}
          />
        ) : undefined
      }
    />
  );
};

const AuthInputType = (<AuthInput name={'test'} />).type;
const AuthSubmitType = (<AccentButton />).type;

const getChildWithType = (children: ReactNode, type: any) =>
  Children.toArray(children).filter((child) => isValidElement(child) && child.type === type);

function AuthFormMain({ onSubmit, children, errInput }: AuthFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  const inputs = getChildWithType(children, AuthInputType) as ReactElement<AuthInputProps>[];
  const submit = getChildWithType(children, AuthSubmitType);

  const errMessages = Children.map(inputs, (e) => {
    if (!isValidElement(e)) return;
    return { [e.props.name as string]: e.props.errMsg };
  }).reduce((acc, cur) => (cur ? { ...acc, ...cur } : acc), {});

  return (
    <form onSubmit={handleSubmit}>
      <div css={CSSInputs}>
        {Children.map(inputs, (e) => {
          if (!isValidElement(e)) return;
          if (e.props.name === errInput) return cloneElement<AuthInputProps>(e, { error: true });
          else return e;
        })}
      </div>
      <span css={CSSErrMsg}>{errInput ? errMessages[errInput] : '\u00A0'}</span>
      <div>{submit}</div>
    </form>
  );
}

export const AuthForm = Object.assign(AuthFormMain, {
  Input: AuthInput,
  Submit: AccentButton,
});

const CSSInputs = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CSSErrMsg = (theme: Theme) => css`
  color: ${theme.color.red01};
  ${theme.font.R_BODY_12};
  margin-top: 6px;
  margin-bottom: 32px;
`;
