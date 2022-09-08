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

  return (
    <div css={messageInputCss}>
      <input
        css={inputCss}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder='new message'
      />
      <button onClick={send}>Send</button>
    </div>
  );
};
