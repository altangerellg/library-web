"use client";
import Book from "@library/components/Book";
import IBook from "@library/types/IBook";
import React, { FC, useEffect, useState } from "react";

const BooksList: FC<any> = (props) => {
    const [books] = useState<Array<IBook>>([
        {
            name: "Test",
            author: { name: "Bayarjargal" },
            isbn: "11",
            publicationDate: "2023-01-01",
        },
    ]);

    return (
        <div>
            <p> Books</p>
            <div className="grid grid-cols-6 gap-4">
                {books.map((e: IBook, index: number) => {
                    return <Book {...e} key={index} />;
                })}
            </div>
        </div>
    );
};

export default BooksList;
