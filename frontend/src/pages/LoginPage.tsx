import { useState } from 'react';
import { Form } from '../components/Form/form';
import axios from 'axios';

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

    const url = 'localhost:8080/login';
    await axios.post(url, body).then((res) => {
      console.log(res);
    });
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
