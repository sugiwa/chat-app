import React from 'react';
import { css } from '@emotion/react';

type Props = {
  updateValue: (value: string) => void;
};

const inputCss = css`
  padding: 5px;
  border: 2px solid #ababab;
  border-radius: 5px;
`;

export const TextField = (props: Props) => {
  const { updateValue } = props;

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    updateValue(inputValue);
  };

  return (
    <div>
      <input type='text' onChange={change} css={inputCss} />
    </div>
  );
};
