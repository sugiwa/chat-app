import { Header } from './components/Header/Header';
import { MessagePage } from './pages/MessagePage';
import { LoginPage } from './pages/LoginPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const AppCss = css`
  // ${emotionReset}
  width: 70%;
  margin: 0 auto;
  padding: 0 50px;
`;

export const App = () => {
  return (
    <div css={AppCss}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MessagePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
