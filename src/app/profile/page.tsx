"use client";
import Button from "@library/components/Button";
import CollectionCard from "@library/components/CollectionCard";
import Hello from "@library/components/Hello";
import useSession from "@library/hooks/useSession";
import IUser from "@library/types/IUser";
import axios from "axios";
import React, { FC, useCallback, useState, useEffect } from "react";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarDateFill, BsFillTelephoneFill, BsGenderAmbiguous, BsPhoneFill } from "react-icons/bs";
import { MdCollectionsBookmark } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import CollectionList from "@library/components/CollectionList";


interface ProfilePageProps {
    params: {
        userId: string;
    };
}

const ProfilePage: FC<ProfilePageProps> = ({ params }: { params: { userId: string } }) => {
    const { user } = useSession();
    return (
        <div className="flex">
            <div className="w-[50%]">
                <div className="flex items-center text-xl py-5 px-10 border">
                    <BiSolidUser /> <p className="flex ml-2"><button>Profile</button></p>
                </div>
                <div className="px-10 py-5 w-full">
                    <Hello />
                    <div className="flex pt-3 flex-col justify-center w-full">
                            <p className="text-lg flex items-center"><BsFillTelephoneFill/>: {user?.phone}</p>
                            <p className="text-lg flex items-center"><GrMail/>: {user?.email}</p>
                            <p className="text-lg flex items-center"><BsGenderAmbiguous/>: {user?.gender}</p>
                            <p className="text-lg flex items-center"><BsFillCalendarDateFill/>: {user?.birthDate.substring(0, 10)}</p>
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="flex items-center text-xl py-5 px-5 border">
                    <MdCollectionsBookmark />
                    <p className="ml-2">
                        <button>My Collections</button>
                    </p>
                </div>
                <div>
                    <CollectionList/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
