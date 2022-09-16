import { css } from '@emotion/react';

type Props = {
  text: String;
};

export const Text = (props: Props) => {
  const { text } = props;

  const textCss = css`
    font-size: 20px;
  `;

  return (
    <div>
      <p css={textCss}>{text}</p>
    </div>
  );
};
