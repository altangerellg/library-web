import IBook from "@library/types/IBook";
import React, { FC } from "react";

interface BookProps extends IBook {}

const Book: FC<BookProps> = ({ name, author, publicationDate, ...props }) => {
    return (
        <div className="bg-gray-400 p-4 rounded-xl" {...props}>
            <p className="text-white font-bold">{name}</p>
            <p>{author?.name}</p>
            <p>{publicationDate}</p>
        </div>
    );
};
export default Book;
