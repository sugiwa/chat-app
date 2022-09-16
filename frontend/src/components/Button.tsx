import { css, jsx, SerializedStyles } from '@emotion/react';

type Props = {
  text?: string;
  clickEvent?: () => void;
  cssStyle?: SerializedStyles;
};

export const Button = (props: Props) => {
  const { text, clickEvent, cssStyle } = props;

  const buttonCss = css`
    padding: 10px 20px;
    margin: 10px;
    border: 1px solid skyblue;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    ${cssStyle}
  `;

  return (
    <div css={buttonCss} onClick={clickEvent}>
      {text}
    </div>
  );
};
