import { Header } from './components/Header/Header';
import { MessageInput } from './components/MessageInput';
import { MessageList } from './components/MessageList';

import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const AppCss = css`
  // ${emotionReset}
  width: 70%;
  margin: 0 auto;
  padding: 0 50px;
`;

export const App = () => {
  return (
    <div css={AppCss}>
      <Header />
      <MessageList />
      <MessageInput />
    </div>
  );
};
