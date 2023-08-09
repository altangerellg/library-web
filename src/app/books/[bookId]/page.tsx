"use client";

import BookDetails from "@library/components/BookDetails";
import BookInfo from "@library/components/BookInfo";
import IBook from "@library/types/IBook";
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import Book from "@library/components/Book";
import RelatedBooks from "@library/components/RelatedBooks";
import ICategory from "@library/types/ICategory";
import { ImSpinner3 } from "react-icons/im";
import useSession from "@library/hooks/useSession";
interface BookPageProps {
    params: {
        bookId: string;
    };
}

const BookPage: FC<BookPageProps> = ({ params: { bookId } }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [book, setBook] = useState<IBook>();
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [books, setBooks] = useState<Array<IBook>>([]);
    const [size, setSize] = useState<number>(6);
    const [type, setType] = useState<string>("mini");
    const fetchBook = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/book/find/" + bookId);
            setBook(response.data);
            setCategories(response.data.categories);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };
    const fetchRelatedBooks = async () => {
        const filter = categories[0]
            ? {
                  category: categories[0]._id,
              }
            : {};
        try {
            const response = await axios.post("/api/book/find", filter, {
                params: { size },
            });
            setBooks(response.data.content);
        } catch (error) {}
        [size];
    };
    useEffect(() => {
        fetchBook();
        //eslint-disable-next-line
    }, [bookId]);

    useEffect(() => {
        fetchRelatedBooks();
        //eslint-disable-next-line
    }, [categories]);
    return (
        <div className="flex w-screen flex-wrap">
            {loading ? (
                <div className="flex flex-col justify-center items-center w-screen min-h-[400px]">
                    <ImSpinner3 className="animate-spin text-2xl" />
                    <p className="text-sm font-thin">Уншиж байна түр хүлээнэ үү</p>
                </div>
            ) : (
                book && (
                    <>
                        <div className="flex flex-col w-full md:w-1/2 lg:w-2/3">
                            <BookInfo {...book} />
                            <BookDetails {...book} />
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 py-20 px-5 lg:px-20">
                            <div className="border">
                                {books.map((e: IBook, index: number) => {
                                    if (e._id !== book._id) return <Book {...e} key={index} type={type} />;
                                })}
                            </div>
                        </div>
                    </>
                )
            )}
        </div>
    );
};

export default BookPage;
