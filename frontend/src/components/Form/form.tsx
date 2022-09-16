import { css } from '@emotion/react';

import { TextField } from './TextField';
import { Button } from '../Button';
import { Label } from '../Label';

type Props = {
  updateEmail: (value: string) => void;
  updatePassword: (value: string) => void;
  trigger: () => void;
};

export const Form = (props: Props) => {
  const { updateEmail, updatePassword, trigger } = props;

  const buttonStyle = css`
    width: 100px;
  `;

  return (
    <div>
      <Label label='Email'>
        <TextField updateValue={updateEmail} />
      </Label>
      <Label label='Password'>
        <TextField updateValue={updatePassword} />
      </Label>
      <Button text='Log in' cssStyle={buttonStyle} clickEvent={trigger} />
    </div>
  );
};
