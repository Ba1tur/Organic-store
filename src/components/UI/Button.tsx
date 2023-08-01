import { IProduct } from "@/interface/IProduct";
import React from "react";

type Props = {
  children: string;
  className: string;
  onClick?: any
};

const Button: React.FC<Props> = ({ children, className , onClick}) => {
  return (
    <button onClick={onClick} className={`robotoFont mt-6 text-xl mt-11 font-bold  ${className} h-20 rounded-2xl w-[220px]`}>
      {children}
    </button>
  );
};

export default Button;
