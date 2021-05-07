import { scrollToTop } from "../../lib/utils/scrollToTop";
import React, { FunctionComponent } from "react";

import style from "./ButtonSecondary.module.scss";

export const ButtonSecondary: FunctionComponent<any> = ({
  children,
  className,
  scrollTop = false,
}) => {
  const calculatedProps: any = {};
  if (scrollTop) {
    calculatedProps.onClick = scrollToTop;
  }
  return (
    <button {...calculatedProps} className={`${style.default} ${className}`}>
      {children}
    </button>
  );
};
