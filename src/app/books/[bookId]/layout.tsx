import IBook from "@library/types/IBook";
import axios from "axios";
import {Metadata,ResolvingMetadata} from "next"
interface Props{
    params: {
        bookId: string;
    }
}
export async function generateMetadata({params: {bookId}}:Props){
    const res = await axios.get(`http://${process.env.BACKEND_URL}/api/book/find/${bookId}`);
    
    const book:IBook = res.data;
    if(book){
        return{
            title: book.name,
            openGraph: {
                images:`http://${process.env.BACKEND_URL}/public/uploads/${book.coverUrl}`
              },
            description: book.description?.substring(0,120),
            twitter:{
                images:`http://${process.env.BACKEND_URL}/public/uploads/${book.coverUrl}`
            }
        }
    }
}

export default function BookLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        {children}
        </>
        )
  }