import React from "react";

type Props = {
  children: string;
  className: string;
};

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button className={`robotoFont mt-6 text-xl mt-11 font-bold  ${className} h-20 rounded-2xl w-[220px]`}>
      {children}
    </button>
  );
};

export default Button;
