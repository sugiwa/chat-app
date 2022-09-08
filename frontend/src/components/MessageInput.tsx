import React from 'react'
import { useSendMessage } from '../hooks/use-send-message';

import { css } from '@emotion/react';

const messageInputCss = css`
  width: 100%;
  display: flex;
`;

const inputCss = css`
  flex: 1;
`;

export const MessageInput = () => {
  const { input, setInput, send } = useSendMessage();

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      send()
    }
  }

  return (
    <div css={messageInputCss}>
      <input
        css={inputCss}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={keyDown}
        value={input}
        placeholder='new message'
      />
      <button onClick={send}>Send</button>
    </div>
  );
};
