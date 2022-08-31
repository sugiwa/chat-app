import { useCallback, useState } from 'react';
import { websocketAtom } from '../state/websocket';
import { useRecoilValue } from 'recoil';

export const useSendMessage = () => {
  const socket = useRecoilValue(websocketAtom);
  const [input, setInput] = useState<string>('');

  const send = useCallback(() => {
    if (input.length === 0) return;
    socket.send(input);
    setInput('');
  }, [input, socket]);

  return { input, setInput, send };
};
