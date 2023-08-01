"use client";
import React, { FC } from "react";
import SideBar from "../../components/SideBar";
import SortControlBar from "@library/components/SortControlBar";
import { SearchProvider } from "@library/context/SearchContext";
const searchLayout: FC<any> = ({ children, ...props }) => {
    return (
            <div className="flex py-12  w-screen flex-col lg:px-32 lg:flex-row">
                <SideBar />
                <div className="flex flex-col w-full lg:pl-5 px-1">{children}</div>
            </div>
    );
};

export default searchLayout;
