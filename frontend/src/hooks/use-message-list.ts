import { websocketAtom } from '../state/websocket';
import { messageListAtom } from '../state/messages';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { IMessageEvent } from 'websocket';
import { Message } from '../models/message';

export const useMessageList = (): Message[] => {
  const socket = useRecoilValue(websocketAtom);
  const messageList = useRecoilValue(messageListAtom);

  const updateMessageList = useRecoilCallback(
    ({ set }) =>
      (message: Message) => {
        set(messageListAtom, [...messageList, message]);
      },
  );

  socket.onmessage = (msg: IMessageEvent) => {
    const json = msg.data as string;
    const result = JSON.parse(json);
    const message: Message = { content: result.message, userId: result.userId };
    updateMessageList(message);
  };

  return messageList;
};
