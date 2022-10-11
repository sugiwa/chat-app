import { css } from '@emotion/react';

const messageCss = css({
  padding: '8px 10px',
  margin: '5px',
  width: 'fit-content',
  borderRadius: '5px',
});

const myMessage = css({
  backgroundColor: '#57F262',
});
const otherMessage = css({
  backgroundColor: '#FFFFFF',
});

type Props = {
  message: string;
  userId: number;
  currentUserId: number;
};

export const Message = ({ message, userId, currentUserId }: Props) => {
  return (
    <div
      css={[messageCss, currentUserId === userId ? myMessage : otherMessage]}
    >
      {userId}: {message}
    </div>
  );
};
