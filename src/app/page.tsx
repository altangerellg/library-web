import Book from "@library/components/Book";
import IBook from "@library/types/IBook";
import Image from "next/image";

export default function Home() {
    const book: IBook = {
        name: "Test",
        author: { name: "Bayarjargal" },
        isbn: "11",
        publicationDate: "2023-01-01",
    };
    return (
        <div className="bg-slate-100">
            <Book {...book} />
        </div>
    );
}
