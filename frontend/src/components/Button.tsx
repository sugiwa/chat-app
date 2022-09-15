import { css } from '@emotion/react';

type Props = {
  text?: string;
  clickEvent?: () => void;
};

const buttonCss = css`
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid skyblue;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = (props: Props) => {
  const { text, clickEvent } = props;

  return (
    <div css={buttonCss} onClick={clickEvent}>
      {text}
    </div>
  );
};
