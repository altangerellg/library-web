"use client";
import React, { FC } from "react";
import SideBar from "../../components/SideBar";
import SortControlBar from "@library/components/SortControlBar";
import { SearchProvider } from "@library/context/SearchContext";
const searchLayout: FC<any> = ({ children, ...props }) => {
    return (
        <SearchProvider>
            <div className="flex py-12 px-32 justify-between w-screen">
                <SideBar />
                <div className="flex flex-col grow ml-5">{children}</div>
            </div>
        </SearchProvider>
    );
};

export default searchLayout;
