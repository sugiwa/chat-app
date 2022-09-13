import { Button } from '../Button';
import { css } from '@emotion/react';

type Props = {
  className?: string;
};

const statusCss = css``;

export const Status = (props: Props) => {
  const { className } = props;

  return (
    <div css={statusCss} className={className}>
      <Button text='Log In' />
    </div>
  );
};
