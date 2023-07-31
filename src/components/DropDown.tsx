import React, { FC, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface DropDownProps {
    title: string;
    children: any;
}

const DropDown: FC<DropDownProps> = ({ title, children }) => {
    const [clicked, setClicked] = useState(false);

    const onClickDropDown = () => {
        setClicked(!clicked);
    };

    return (
        <div className="text-xl w-full flex flex-col  py-7 px-5 border cursor-pointer">
            <div onClick={onClickDropDown} className="flex justify-between items-center">
                <h3 className="whitespace-nowrap">{title}</h3>
                {clicked ? <BiMinus className="text-2xl" /> : <BiPlus className="text-2xl" />}
            </div>
            <div
                className={
                    clicked ? "block text-sm mt-5 transition-transform" : "hidden text-sm mt-5 transition-transform"
                }
            >
                {children}
            </div>
        </div>
    );
};

export default DropDown;
