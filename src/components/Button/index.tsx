import React, { FunctionComponent } from 'react';

import style from './Button.module.scss';

export const Button: FunctionComponent<any> = ({ text }) => {
  return (
    <button
      style={{
        backgroundImage:
          'linear-gradient(270deg, rgba(255,184,82,1) 0%, rgba(255,157,65,1) 50%, rgba(255,132,49,1) 100%)',
      }}
      className={style.default}>
      {text}
    </button>
  );
};
