import { ReactNode } from 'react';
import { Text } from './Text';
import { css } from '@emotion/react';

type Props = {
  label: String;
  children: ReactNode;
};

export const Label = (props: Props) => {
  const { label, children } = props;

  const labelCss = css`
    border-left: 5px solid #ababab;
    padding-left: 20px;
  `;

  return (
    <div css={labelCss}>
      <Text text={label} />
      {children}
    </div>
  );
};
