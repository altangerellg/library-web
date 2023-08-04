import IBook from "@library/types/IBook";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import IconButton from "@library/components/IconButton";
import Link from "next/link";
interface BookProps extends IBook {}

const Book: FC<BookProps> = ({
    _id,
    name,
    author,
    publicationDate,
    coverUrl,
    loves,
    description,
    type="card",
    format,
    ...props
}) => {
    if(description){
        description = description.substring(0,120) + "...";
    }
    if (type === "card") {
        return (
            <div
                className="relative group flex flex-col justify-between border p-4 m-0 hover:shadow-lg hover:border-gray-900"
                {...props}
            >
                <div className="flex justify-center items-center w-full mt-2">
                <Link href={`/books/${_id}`}><img alt={name} src={"/public/uploads/" + coverUrl} style={{ width: "150px" }} /></Link>
                </div>
                <div className="flex flex-col">
                    <div className="relative lg:group-hover:-translate-y-10 ease-in duration-200 bottom-0 bg-white py-2 z-20">
                        <p className="uppercase text-accent h-auto font-light text-xs">{format}</p>
                        <Link href={`/books/${_id}`}><p className="text-primary mt-4 font-semibold hover:cursor-pointer truncate ...">{name}</p></Link>
                        <p className="hover:text-accent text-gray-500 text-sm mt-3 truncate ... cursor-pointer">{author ? author.firstname : "Unknown"}</p>
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
    } else {
        return (
            <div
                className="relative group flex justify-between border p-4 m-0 hover:shadow-lg hover:border-gray-900 flex-col md:flex-row"
                {...props}
            >
                <div className="flex justify-center items-center lg:w-2/6 my-2 md:w-1/4 w-full">
                    <Link href={"/books/"+{_id}}><img alt={name} src={"/public/uploads/" + coverUrl} style={{ width: "150px" }} /></Link>
                </div>
                <div className=" flex justify-center flex-col relative grow bg-white ml-5 py-2 z-10 md:w-1/2">
                    <p className="uppercase text-accent h-auto font-light text-xs">EPUB</p>
                    <p className="text-primary mt-2 text-lg font-semibold hover:cursor-pointer truncate ... w-full">{name}</p>
                    <p className="hover:text-accent text-gray-500 mt-2 text-sm truncate ... cursor-pointer  ">{author? author.firstname : "Unknown"}</p>
                    <div className=" max-w-full mt-3">
                        <p className="text-xs flex flex-wrap">{description}</p>
                    </div>
                    <p className="text-primary my-2 text-xs font-light ">{loves} хүнд таалагдсан</p>
                </div>
                <div className="flex relative justify-start items-center lg:w-1/5 w-1/4  ml-5">
                    <IconButton className="mr-2">
                        <AiOutlineFolderAdd className="text-xl cursor-pointer" />
                    </IconButton>
                    <IconButton>
                        <AiOutlineHeart className="text-xl cursor-pointer" />
                    </IconButton>
                </div>
            </div>
        );
    }
};
export default Book;
