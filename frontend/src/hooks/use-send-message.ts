import { useCallback, useState } from 'react';
import { websocketAtom } from '../state/websocket';
import { useRecoilValue } from 'recoil';

export const useSendMessage = () => {
  const socket = useRecoilValue(websocketAtom);
  const [input, setInput] = useState<string>('');

  const userInfo = JSON.parse(localStorage.getItem('user') as string);

  const send = useCallback(() => {
    if (input.length === 0) return;
    const body = {
      message: input,
      userId: userInfo?.id ?? 0,
    };
    const jsonBody = JSON.stringify(body);
    socket.send(jsonBody);
    setInput('');
  }, [input, socket]);

  return { input, setInput, send };
};
