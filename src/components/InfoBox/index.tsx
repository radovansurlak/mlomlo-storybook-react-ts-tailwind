import React, { FunctionComponent } from 'react';

import style from './InfoBox.module.scss';

export const InfoBox: FunctionComponent<any> = ({ className, children }) => {
  return (
    <aside className={`${style.wrapper} ${className}`}>
      <div style={{ backgroundImage: 'url(/img/questionmark-bg.png)' }} className={style.box}>
        <img className={style.image} alt="" src="/img/info-box-woman.png" />
        <div className={style.contentContainer}>
          <span className={style.title}>Víte že?</span>
          <p className={style.content}>{children}</p>
        </div>
      </div>
    </aside>
  );
};
