import IBook from "@library/types/IBook";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import IconButton from "@library/components/IconButton";
interface BookProps extends IBook {}

const Book: FC<BookProps> = ({ name, author, publicationDate, coverUrl, loves, type = "card", ...props }) => {
    return (
        <div
            className="relative group flex flex-col justify-between border p-4 m-0 hover:shadow-lg hover:border-gray-900"
            {...props}
        >
            <div className="flex justify-center items-center w-full">
                <img alt={name} src={"/public/uploads/" + coverUrl} style={{ width: "150px" }} />
            </div>
            <div className="flex flex-col">
                <div className="relative lg:group-hover:-translate-y-10 ease-in duration-200 bottom-0 bg-white py-2 z-10">
                    <p className="uppercase text-accent h-auto font-light text-xs">EPUB</p>
                    <p className="text-primary mt-4 font-semibold hover:cursor-pointer truncate ...">{name}</p>
                    <p className="hover:text-accent truncate ...">{author}</p>
                    <p className="text-primary my-2 text-xs font-light ">{loves} хүнд таалагдсан</p>
                </div>
                <div className="flex relative lg:-mt-8 justify-start items-center lg:absolute lg:bottom-5 lg:z-0 ">
                    <IconButton className="mr-2">
                        <AiOutlineFolderAdd className="text-xl cursor-pointer" />
                    </IconButton>
                    <IconButton>
                        <AiOutlineHeart className="text-xl cursor-pointer" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
export default Book;
