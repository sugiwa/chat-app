import { useState } from 'react';
import { Form } from '../components/Form/form';
import * as axios from '../util/api';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = (value: string) => {
    setEmail(value);
  };

  const updatePassword = (value: string) => {
    setPassword(value);
  };

  const login = async () => {
    console.log('LOGIN', email, password);
    const body = {
      email: email,
      password: password,
    };

    const url = 'http://localhost:8080/login';
    const result = await axios.post(url, body);
    console.log('post result: ', result);
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
