import { useState } from 'react';
import { Form } from '../components/Form/form';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = (value: string) => {
    setEmail(value);
  };

  const updatePassword = (value: string) => {
    setPassword(value);
  };

  const login = () => {
    console.log('LOGIN', email, password);
  };

  return (
    <div>
      <h2>Log in</h2>
      <Form
        updateEmail={updateEmail}
        updatePassword={updatePassword}
        trigger={login}
      />
    </div>
  );
};
