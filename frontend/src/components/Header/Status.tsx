import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

type Props = {
  className?: string;
};

const statusCss = css``;

export const Status = (props: Props) => {
  const { className } = props;
  const navigate = useNavigate();

  return (
    <div css={statusCss} className={className}>
      <Button text='Log In' clickEvent={() => navigate('/login')} />
    </div>
  );
};
