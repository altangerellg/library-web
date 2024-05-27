import IBook from "@library/types/IBook";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import Book from "./Book";
interface NewReleaseBooksProps{}

const NewReleaseBooks: FC<NewReleaseBooksProps> = () =>  {
    const [books, setBooks] = useState<Array<IBook>>([]);
    const router = useRouter();
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(14);
    const [totalPage, setTotalPage] = useState<number>(1);
    
     const fetchNewBooks = async (values: any) => {
        try {
            const response = await axios.post("/api/book/find", values, {
                params: { page, size, order: "desc", sort: "publicationDate" },
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
        <div style={{background: "#fff6f6", marginTop: 80}}>
        <div className="mx-12" style={{ marginBottom: 80,}}>
        <header className="flex justify-between items-center" style={{marginBottom: 40, background: ""}}>
        <motion.h2 className="text-3xl font-bold my-4" style={{marginLeft: 40}}  initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>New Release</motion.h2>
        <Link href="/search"><motion.div initial={{y: -100, opacity:0}} animate={{y:0, opacity:1}}>View All...</motion.div></Link>
        </header>
        <div className="grid grid-cols-2 lg:grid-cols-7"  style={{background: "white"}}>
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
    </div>
    )
}
export default NewReleaseBooks;