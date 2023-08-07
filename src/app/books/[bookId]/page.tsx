"use client"

import BookDetails from "@library/components/BookDetails";
import BookInfo from "@library/components/BookInfo";
import IBook from "@library/types/IBook";
import React, { FC, useState, useEffect } from "react"
import axios from "axios";
import Book from "@library/components/Book";
import RelatedBooks from "@library/components/RelatedBooks";
import ICategory from "@library/types/ICategory";
interface BookPageProps{
    params: {
        bookId: string;
    }
}
 
const BookPage: FC<BookPageProps> = ({params: {bookId}}) => {
     const [book,setBook] = useState<IBook>({_id:"",isbn:"",publicationDate:""})
     const [categories, setCategories] = useState<Array<ICategory>>([])
     const [books, setBooks] = useState<Array<IBook>>([]);
     const [size, setSize] = useState<number>(6);
     const [type,setType] = useState<string>("mini")

     const fetchBook = async () => {
        
        try {
            const response = await axios.get("/api/book/find/"+bookId);
            setBook(response.data);
            setCategories(response.data.categories)
            console.log(categories)
        } catch (error) {}
    };
    const fetchRelatedBooks = async() =>{
        
        const filter = categories[0]?{
            category: categories[0]._id
         }:{}
        try {
            const response = await axios.post("/api/book/find", filter, {
                params: {size},
            });
            setBooks(response.data.content);
        } catch (error) {}
        [size];
    }
    useEffect(() => {
        fetchBook();
        //eslint-disable-next-line
    }, [bookId]);

    useEffect(()=>{
        fetchRelatedBooks();
        //eslint-disable-next-line
    },[categories])
    return ( 
        <div className="flex w-screen flex-wrap">
            <div className="flex flex-col w-full md:w-1/2 lg:w-2/3">
                <BookInfo {...book}/>
                <BookDetails {...book}/>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 py-20 px-5 lg:px-20">
                <div className="border">
                    {books.map((e: IBook, index: number) => {
                        if(e._id !== book._id) return <Book {...e} key={index} type={type} />;
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default BookPage;