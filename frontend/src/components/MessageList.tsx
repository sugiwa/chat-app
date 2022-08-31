import React from 'react';
import { useMessageList } from '../hooks/use-message-list';

import { css } from '@emotion/react';

const message = css`
  background-color: #eeeeee;
`;

export const MessageList: React.FC = () => {
  const messageList = useMessageList();

  return (
    <div css={message}>
      {messageList.map((m, i) => (
        <div key={i}>{m.content}</div>
      ))}
    </div>
  );
};
