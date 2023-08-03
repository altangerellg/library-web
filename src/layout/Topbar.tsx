"use client";
import React, { FC, useEffect, useState } from "react";
import { HiPhone, HiUser } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import LoginSidebar from "@library/components/LoginSidebar";
import { useRouter } from "next/navigation";
import IUser from "@library/types/IUser";
import useSession from "@library/hooks/useSession";

interface TopbarProps {
    [key: string]: any;
}

const Topbar: FC = (props: TopbarProps) => {
    const [loginSidebar, setLoginSidebar] = useState(false);
    const router = useRouter();
    const { user } = useSession();
    const toggleSidebar = () => {
        setLoginSidebar((s) => !s);
    };
    useEffect(() => {}, [user]);
    return (
        <div className="lg:flex hidden w-screen py-4 px-12 justify-between items-center border-b-[1px]">
            <div className="w-[50%] flex justify-start items-center">
                <p className="hover:text-accent cursor-pointer">Танд тусламж хэрэгтэй юу ?</p>
                <div className="ml-4 flex items-center">
                    <HiPhone />
                    <p className="ml-2">+976 99119911</p>
                </div>
            </div>
            <div className="w-[50%] flex justify-end items-center">
                {/* <HiOutlineLocationMarker className="mr-2 text-xl" />
                <BiTransfer className="mr-2 text-xl" />
                <HiHeart className="mr-2 text-xl" /> */}
                {user?.lastname ? (
                    user.lastname
                ) : (
                    <HiUser className="mr-2 text-xl cursor-pointer" onClick={toggleSidebar} />
                )}
                <BsBag className="mr-2 ml-4 text-xl" />
            </div>
            <LoginSidebar
                toggleSidebar={toggleSidebar}
                onHide={(e) => {
                    if (e.target.id === "modal-backdrop") setLoginSidebar((s) => !s);
                }}
                show={loginSidebar}
            />
        </div>
    );
};

export default Topbar;
