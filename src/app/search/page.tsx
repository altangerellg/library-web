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
    const [sort,setSort] = useState("name")
    const [order,setOrder] = useState("asc");
    const fetchBooks = async () => {
        try {  
            const response = await axios.post("/api/book/find", filter, {
                params: { page, size,sort,order},
            });
            setBooks(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {}
        [page, size];
    };

    useEffect(() => {
        fetchBooks();
        //eslint-disable-next-line
    }, [page, size, filter,type,sort]);

    const onChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(parseInt(event.target.value));
    };

    const onChangeType = (bookType:string) => {
        setType(bookType);
    }
    const onChangePage = (pageNumber:number) => {
        setPage(pageNumber);
    }
    const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.value === "publicationDate") setOrder("desc")
        if(event.target.value === "name") setOrder("asc")
        if(event.target.value === "totalViews") setOrder("desc");
        setSort(event.target.value);
    }
    
    return (
        <>
            <SortControlBar books={books.length} size={size} page={page} onChangeSize={onChangeSize} onChangeType = {onChangeType} onChangeSort = {onChangeSort}/>
            <div className="flex flex-col w-full mt-5">
                <div>
                    <div className={type === "card" ? "grid grid-cols-2 lg:grid-cols-4" : "grid grid-cols-1 lg:grid-cols-1"} >
                        {books.map((e: IBook, index: number) => {
                            return <Book {...e} key={index} type={type} />;
                        })}
                    </div>
                </div>
                <Pagination totalPage={totalPage} page={page+1} onChangePage={onChangePage}/>
            </div>
        </>
    );
};

export default SearchList;
