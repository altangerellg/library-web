"use client";
import IBook from "@library/types/IBook";
import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { WebReader, ReaderProvider } from "steppe-web-reader";
interface BookReaderProps {
    params:{
        bookId: string;
    }
}
const BookReader: FC<BookReaderProps> = ({params: {bookId}}) => {
    const [book, setBook] = useState<IBook>({_id:"",isbn:"",publicationDate:""});
    const fetchBook = async () => {
        try {
            const response = await axios.get("/api/book/find/" + bookId);
            setBook(response.data);
        } catch (error) {}
        [];
    };
    useEffect(() => {
        fetchBook();
        //eslint-disable-next-line
    }, [bookId]);
    return (
        book && (
            <ReaderProvider>
                <WebReader baseUrl={"/public/uploads/" + book?.filePath} />;
            </ReaderProvider>
        )
    );
};

export default BookReader;
