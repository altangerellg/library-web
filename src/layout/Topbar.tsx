"use client";
import React, { FC } from "react";
import {
    HiPhone,
    HiUser,
} from "react-icons/hi";
import { BsBag } from "react-icons/bs";
interface TopbarProps {
    [key: string]: any;
}

const Topbar: FC = (props: TopbarProps) => {
    return (
        <div className="lg:flex hidden w-screen py-4 px-12 justify-between items-center border-b-[1px]">
            <div className="w-[50%] flex justify-start items-center">
                <p className="hover:text-accent cursor-pointer">
                    Танд тусламж хэрэгтэй юу ?
                </p>
                <div className="ml-4 flex items-center">
                    <HiPhone />
                    <p className="ml-2">+976 99119911</p>
                </div>
            </div>
            <div className="w-[50%] flex justify-end items-center">
                {/* <HiOutlineLocationMarker className="mr-2 text-xl" />
                <BiTransfer className="mr-2 text-xl" />
                <HiHeart className="mr-2 text-xl" /> */}
                <HiUser className="mr-2 text-xl" />
                <BsBag className="mr-2 text-xl" />
            </div>
        </div>
    );
};

export default Topbar;
