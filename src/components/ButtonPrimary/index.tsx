import { scrollToTop } from '../../lib/utils/scrollToTop';
import React, { FunctionComponent } from 'react';

import style from './ButtonPrimary.module.scss';

interface ButtonPrimaryProps {
  children: React.ReactChildren | string;
  className?: string;
  scrollTop?: boolean;
  [prop: string]: any;
}

export const ButtonPrimary: FunctionComponent<ButtonPrimaryProps> = ({
  children,
  className,
  scrollTop = false,
  ...props
}) => {
  const calculatedProps: any = {};
  if (scrollTop) {
    calculatedProps.onClick = scrollToTop;
  }
  return (
    <button {...calculatedProps} {...props} className={`${style.default} ${className}`}>
      {children}
    </button>
  );
};
