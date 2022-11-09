import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type {
  FormEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import { AccentButton } from '@/components/common/Button';
import { InputBase } from '@/components/common/Input';

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

const AuthErrorMsg = ({ children }: PropsWithChildren) => {
  return <span css={CSSErrMsg}>{children}</span>;
};

const AuthInputType = (<AuthInput name={'test'} />).type;

const getChildWithType = (children: ReactNode, type: any) =>
  Children.toArray(children).filter((child) => isValidElement(child) && child.type === type);
const getChildExcludeType = (children: ReactNode, type: any) =>
  Children.toArray(children).filter((child) => isValidElement(child) && child.type !== type);

interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  errInput?: string;
  errFormMsg?: string;
}
function AuthFormMain({ onSubmit, children, errInput, errFormMsg }: AuthFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  const inputs = getChildWithType(children, AuthInputType) as ReactElement<AuthInputProps>[];
  const another = getChildExcludeType(children, AuthInputType);

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
      <AuthErrorMsg>{errFormMsg || (errInput ? errMessages[errInput] : '\u00A0')}</AuthErrorMsg>
      <div>{another}</div>
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
`;
