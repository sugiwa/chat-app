import React from 'react';

import { Message } from './Message';
import { useMessageList } from '../hooks/use-message-list';

import { css } from '@emotion/react';
import { User } from '../models/user';

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

  const currentUserId = (() => {
    const user = JSON.parse(localStorage.getItem('user') as string) as User;
    console.log(user);
    return user?.id;
  })();

  return (
    <div css={messageListCss}>
      {messageList.map((m, i) => (
        <Message
          key={i}
          message={m.content}
          userId={m.userId}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
};
