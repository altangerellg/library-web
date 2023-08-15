import React, { FC, useEffect, useState } from "react";
import Button from "./Button";
import ICollection from "@library/types/ICollection";
import IBook from "@library/types/IBook";
import Book from "./Book";

interface CollectionCardProps extends ICollection  {}

const CollectionCard: FC<CollectionCardProps> = ({
_id,
name,
books,
date,
createdUser
}) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const [currBooks,setBooks] = useState<Array<IBook>>(books || [])
    const [type,setType] = useState<string>("mini")
    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };

    return (
        <div className="flex flex-col">
            <div className="flex border rounded-xl bg-gray-200 items-center justify-between ">
                <div>
                    <h2>{name}</h2>    
                </div>
               <div className="flex items-center justify-end">
               <div className="mx-1">
                    <Button className="w-{32} text-white rounded-xl">Ном нэмэх</Button>
                </div>
                <div className="">
                    <Button className="w-{32} text-white rounded-xl" onClick={toggleAccordion}>
                        Харах
                    </Button>
                </div>
                </div> 
            </div>
            {accordionOpen && 
            
                currBooks.map((book:IBook,index:number)=>{

                    return (
                        <Book key={index} {...book} type={type}/>
                    )
                })
                
            }
        </div>
    );
};

export default CollectionCard;

