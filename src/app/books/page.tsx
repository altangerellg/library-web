"use client";
import Book from "@library/components/Book";
import IBook from "@library/types/IBook";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const BooksList: FC<any> = (props) => {
    const [books, setBooks] = useState<Array<IBook>>([]);
    const router = useRouter();
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(100);
    const [totalPage, setTotalPage] = useState<number>(1);

    const fetchBooks = async (values: any) => {
        try {
            const response = await axios.post("/api/book/find", values, {
                params: { page, size },
            });
            setBooks(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {}
        [page, size];
    };

    useEffect(() => {
        fetchBooks({});
        //eslint-disable-next-line
    }, [page, size]);
    return (
        <div>
            <p> Books</p>
            <div className="grid grid-cols-2 lg:grid-cols-6">
                {books.map((e: IBook, index: number) => {
                    return <Book {...e} key={index} />;
                })}
            </div>
        </div>
    );
};

export default BooksList;
