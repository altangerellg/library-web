import IBook from "@library/types/IBook";
import axios from "axios";
import Book from "./Book";
import {FC, useState, useEffect} from "react"
import ICategory from "@library/types/ICategory";
interface RelatedBooksProps {
    categoryId:string;
}
 
const RelatedBooks: FC<RelatedBooksProps> = ({categoryId}) => {
    const [books, setBooks] = useState<Array<IBook>>([]);
    const size: number = 6;
    const filter = {
        category:categoryId
    }
    const fetchBooks = async () => {
        try {
            const response = await axios.post("/api/book/find", filter, {
                params: { size },
            });
            setBooks(response.data.content);
        } catch (error) {}
        [size];
    };
    useEffect(()=>{
        fetchBooks();
        //eslint-disable-next-line
    },[])
    
    return ( 
        <div>
            {books.map((e:IBook,index:number)=>{
                return <Book {...e} type="list" key={index} />
            })}
        </div>
     );
}
 
export default RelatedBooks;