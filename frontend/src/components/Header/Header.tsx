import { Status } from './Status';

import { css } from '@emotion/react';

const headerCss = css`
  display: flex;
`;
const titleCss = css`
  display: inline-block;
  flex: 1;
`;
const statusCss = css`
  display: flex;
  align-items: center;
`;

export const Header = () => {
  return (
    <div css={headerCss}>
      <h1 css={titleCss}>Simple Chat</h1>
      <Status css={statusCss} />
    </div>
  );
};
