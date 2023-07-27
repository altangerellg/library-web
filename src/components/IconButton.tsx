import React, { FC } from "react";

interface IconButtonProps {
    [key: string]: any;
}

const IconButton: FC<IconButtonProps> = ({ children, className, ...props }) => {
    return (
        <div className={`rounded-full p-2 hover:text-white hover:bg-accent ${className}`} {...props}>
            {children}
        </div>
    );
};

export default IconButton;
