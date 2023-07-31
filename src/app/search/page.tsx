"use client";
import React, { FC, useState, useEffect } from "react";
import Pagination from "@library/components/Pagination";
import IBook from "@library/types/IBook";
import { useRouter } from "next/navigation";
import Book from "@library/components/Book";
import axios from "axios";
import SortControlBar from "@library/components/SortControlBar";
import useFilter from "@library/hooks/useFilter";
const SearchList: FC<any> = (props) => {
    const router = useRouter();
    const { filter } = useFilter();
    const [books, setBooks] = useState<Array<IBook>>([]);
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(20);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [type, setType] = useState("card");

    const fetchBooks = async () => {
        try {
            const response = await axios.post("/api/book/find", filter, {
                params: { page, size },
            });
            setBooks(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {}
        [page, size];
    };

    useEffect(() => {
        fetchBooks();
        //eslint-disable-next-line
    }, [page, size, filter,type]);

    const onChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(parseInt(event.target.value));
    };

    const onChangeType = (bookType:string) => {
        setType(bookType);
    }
    return (
        <>
            <SortControlBar books={books.length} size={size} page={page} onChangeSize={onChangeSize} onChangeType = {onChangeType} />
            <div className="flex flex-col w-full mt-5">
                <div>
                    <div className={type === "card" ? "grid grid-cols-2 lg:grid-cols-4" : "grid grid-cols-1 lg:grid-cols-1"} >
                        {books.map((e: IBook, index: number) => {
                            return <Book {...e} key={index} type={type} />;
                        })}
                    </div>
                </div>
                <Pagination />
            </div>
        </>
    );
};

export default SearchList;
