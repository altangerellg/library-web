import IBook from "@library/types/IBook";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import IconButton from "@library/components/IconButton";
interface BookProps extends IBook {}

const Book: FC<BookProps> = ({
    name,
    author,
    publicationDate,
    coverUrl,
    loves,
    ...props
}) => {
    return (
        <div
            className="flex flex-col justify-between border p-4 m-0 hover:shadow-lg cursor-pointer"
            {...props}
        >
            <div className="flex justify-center items-center w-full">
                <img
                    alt={name}
                    src={"/public/uploads/" + coverUrl}
                    style={{ width: "150px" }}
                />
            </div>
            <motion.div
                initial={{
                    y: 0,
                }}
                transition={{ duration: 0.35, type: "spring" }}
                whileHover={{ y: -40 }}
                className="pt-4 z-[999] bg-white"
            >
                <p className="uppercase text-accent h-auto font-light text-xs">EPUB</p>
                <p className="text-primary mt-4 font-semibold">{name}</p>
                <p>{author}</p>
                <p className="text-primary my-2 text-xs font-light">{loves} хүнд таалагдсан</p>
            </motion.div>
            <motion.div
                className="flex z-0 -mt-8 justify-start items-center"
            >
                <IconButton className="mr-2">
                    <AiOutlineFolderAdd className="text-xl" />
                </IconButton>
                <IconButton>
                    <AiOutlineHeart className="text-xl" />
                </IconButton>
            </motion.div>
        </div>
    );
};
export default Book;
