import IBook from "@library/types/IBook";
import Link from "next/link";
import { Component, FC, useEffect, useState } from "react";
import IconButton from "./IconButton";
import { AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import Book from "./Book";
interface NewReleaseBooksProps {}

const NewReleaseBooks: FC<NewReleaseBooksProps> = () => {
    const [books, setBooks] = useState<Array<IBook>>([]);
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(4);
    const [totalPage, setTotalPage] = useState<number>(1);
    const router = useRouter();
    const fetchNewBooks = async (values: any) => {
        try {
            const response = await axios.post("/api/book/find", values, {
                params: { page, size, order: "desc", sort: "isFeatured" },
            });
            setBooks(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {
            console.log(error);
        }
        [page, size];
    };
    useEffect(() => {
        fetchNewBooks({});
        //eslint-disable-next-line
    }, [page, size]);

    return (
        <div className="mx-10">
            <header>
                <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    Featured Books
                </motion.h2>
            </header>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {books.map((e: IBook, index: number) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.5, duration: 0.4 }}
                        >
                            <Book {...e} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
export default NewReleaseBooks;
