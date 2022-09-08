import React from 'react';

import { Message } from './Message';
import { useMessageList } from '../hooks/use-message-list';

import { css } from '@emotion/react';

const messageListCss = css`
  padding: 10px 20px;
  height: 80vh;
  overflow-y: scroll;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
`;

export const MessageList: React.FC = () => {
  const messageList = useMessageList();

  return (
    <div css={messageListCss}>
      {messageList.map((m, i) => (
        <Message key={i} message={m.content} />
      ))}
    </div>
  );
};
