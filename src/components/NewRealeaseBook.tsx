import IBook from "@library/types/IBook";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import IconButton from "./IconButton";
import { AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import Book from "./Book";
interface NewReleaseBooksProps{}

const NewReleaseBooks: FC<NewReleaseBooksProps> = () =>  {
    const [books, setBooks] = useState<Array<IBook>>([]);
    const [pages, setPages] = useState<number>(0);
    const [sizes, setSizes] = useState<number>(10);
    const [totalPage, setTotalPage] = useState<number>(1);
    const router = useRouter();
     const fetchNewBooks = async (values: any) => {
        try {
            const response = await axios.post("/api/book/find", values, {
                params: { pages, sizes, order: "desc", sort: "publicationDate" },
            });
            setBooks(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {
            console.log(error);
        }
        [pages, sizes];
    };
    useEffect(() => {
       fetchNewBooks({});
        //eslint-disable-next-line
    }, [pages, sizes]);

    return (
        <div style={{background: "#fff6f6", marginTop: 80}}>
        <div className="mx-10" style={{ marginBottom: 80,}}>
        <header className="flex justify-between items-center" style={{marginBottom: 40, background: ""}}>
        <motion.h2 className="text-3xl font-bold my-4" style={{marginLeft: 40}}  initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>New Release</motion.h2>
        <Link href="/search"><motion.div initial={{y: -100, opacity:0}} animate={{y:0, opacity:1}}>View All...</motion.div></Link>
        </header>
        <div className="grid grid-cols-2 lg:grid-cols-6" mt-20 style={{background: "white"}}>
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