"use client"

import IBook from "@library/types/IBook";
import React, { FC } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsHeart } from "react-icons/bs";
import {CiHeart} from "react-icons/ci"

interface BookInfoProps extends IBook{
}
 
const BookInfo: FC<BookInfoProps> = ({
    _id,
    name,
    author,
    publicationDate,
    coverUrl,
    loves,
    description,
    summary,
    ...props
}) => {
    return ( 
        <div className="flex w-full flex-col p-6 lg:flex-row">
            <div className="flex justify-center items-center w-full lg:w-5/12 h-auto lg:px-5">
                 <img alt={name} src={"/public/uploads/" + coverUrl} className="w-full h-auto"/> 
            </div>
            <div className="flex flex-col w-full lg:w-7/12 lg:p-8">
                <div className="flex flex-wrap">
                    <div className="w-full text-2xl font-bold mt-10">{name}</div>
                    <div className="flex justify-between w-full mt-5">
                        <p>Таалагдсан: {loves} </p>
                        <p>{author?.firstname + " " + author?.lastname}</p>
                    </div>
                    <div className="w-full mt-5 text-sm">
                        {summary}
                    </div>
                </div>
                <div className="flex flex-wrap mt-5">
                    <button className="w-full bg-main text-lg font-light text-white py-4 lg:w-1/2">Унших</button>
                    <button className="flex justify-center items-center w-full mt-8 md:w-1/2 lg:mt-0"><CiHeart className="text-2xl"/><p>Цуглуулганд нэмэх</p></button>
                    <div className="flex w-full mt-8 justify-center items-center md:w-1/2 lg:w-full">
                        <ul className="flex">
                            <li className="mx-3 text-2xl"><BsFacebook /></li>
                            <li className="mx-3 text-2xl"><BsInstagram /></li>
                            <li className="mx-3 text-2xl"><BsTwitter /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BookInfo;