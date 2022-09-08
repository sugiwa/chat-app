import { css } from '@emotion/react';

const messageCss = css`
  padding: 8px 10px;
  margin: 5px;
  width: fit-content;
  background-color: #ffffff;
  border-radius: 5px;
`;

type Props = {
  message: string;
};

export const Message = ({ message }: Props) => {
  return <div css={messageCss}>{message}</div>;
};
