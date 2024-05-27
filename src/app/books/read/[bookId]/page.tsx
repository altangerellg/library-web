"use client";
import IBook from "@library/types/IBook";
import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { WebReader, ReaderProvider } from "steppe-web-reader";
import WebViewer from "@pdftron/webviewer";
interface BookReaderProps {
    params: {
        bookId: string;
    };
}
const BookReader: FC<BookReaderProps> = ({ params: { bookId } }) => {
    const [book, setBook] = useState<IBook>();
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
            <div className="relative">
                <ReaderProvider>
                    <WebReader baseUrl={"/public/uploads/" + book?.filePath} />;
                </ReaderProvider>
            </div>
        )
    );
};

export default BookReader;
