import React, { FC } from "react";

interface InputProps {
    [key: string]: any;
}

const Input: FC<InputProps> = ({ className, children, ...props }) => {
    return <input className={`border-[1px] text-black border-black/40 border-solid w-full p-4 ${className}`} {...props} />;
};

export default Input;
