import { scrollToTop } from '../../lib/utils/scrollToTop';
import React, { FunctionComponent } from 'react';

import style from './ArrowButton.module.scss';

export const ArrowButton: FunctionComponent<any> = (props, ref) => {
  const { text, className, triggerRef } = props;

  return (
    <button onClick={scrollToTop} className={`${style.button} ${className}`} ref={triggerRef}>
      <span className={style.label}>{text}</span>
      <svg className={style.svg} viewBox="0 0 24 55" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-.3 0H0a8 8 0 016.2 3l15.6 19.4a8 8 0 010 10L6.3 52A8 8 0 010 55h-.3V0z"
          fill="#72BC13"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};
