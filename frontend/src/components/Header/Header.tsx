import { Status } from './Status';
import { Button } from '../Button';

import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const headerCss = css`
  display: flex;
`;
const titleCss = css`
  display: inline-block;
  flex: 1;
`;
const alignCss = css`
  display: flex;
  align-items: center;
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div css={headerCss}>
      <h1 css={titleCss}>Simple Chat</h1>
      <div css={alignCss}>
        <Button text='Chat' clickEvent={() => navigate('/')} />
      </div>
      <Status css={alignCss} />
    </div>
  );
};
