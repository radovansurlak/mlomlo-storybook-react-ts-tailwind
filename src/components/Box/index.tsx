import { ArrowLabel } from "../ArrowLabel";
import React, { FunctionComponent } from "react";

import style from "./Box.module.scss";

interface BoxProps {
  backgroundImage: string;
  from: string;
  icon: string;
  to: string;
  labelText?: string;
  logo: string;
  className?: string;
  onClick?: () => void;
}

export const Box: FunctionComponent<BoxProps> = ({
  backgroundImage,
  from,
  to,
  icon,
  labelText,
  logo,
  className,
  onClick,
}: BoxProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 35%, rgba(0, 0, 0, 0.8)),
    url(${backgroundImage})`,
      }}
      className={`flex flex-col items-start col-span-3 flex-shrink-0 p-4 pb-6 bg-center bg-cover w-card rounded-10px h-72 shadow-box ${className}`}
    >
      <div className="self-end bg-white rounded-full shadow-sm p-4px bg-opacity-90 ">
        <div
          style={{ backgroundImage: `url(${logo})` }}
          className={style.logo}
        />
      </div>

      <span className="mt-auto text-white text-16px">Z: {from}</span>
      <div className="flex mt-10px">
        <img src={icon} className="mr-2" alt="Mlomlo" width="24" height="24" />
        <span className="font-bold text-white text-18px">{to}</span>
      </div>
      {labelText ? <ArrowLabel className="mt-4" text={labelText} /> : null}
    </button>
  );
};
