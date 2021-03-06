import React, { FunctionComponent } from 'react';

import style from './ArrowLabel.module.scss';

export const ArrowLabel: FunctionComponent<any> = ({ text, className }) => {
  return (
    <span className={`${style.button} ${className}`}>
      <span className={style.label}>{text}</span>
      <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.5 45">
        <defs>
          <linearGradient id="a" x1="1" x2="-3.4" y1=".5" y2=".5">
            <stop offset="0" stopColor="#ffb852" />
            <stop offset=".5" stopColor="#ff9d41" />
            <stop offset="1" stopColor="#ff8431" />
          </linearGradient>
        </defs>
        <path
          d="M-.1.1a24.1 24.1 0 0113.7 4l13.9 9.6c7.8 5.4 7.7 12.5 0 18l-14 9.5a24.5 24.5 0 01-13.5 4L-.1.1zm19 18.5a3.5 3.5 0 00-2.5 6 3.5 3.5 0 102.5-6z"
          fill="url(#a)"
          fillRule="evenodd"
        />
      </svg>
    </span>
  );
};
