import IBook from "@library/types/IBook";
import React, { FC } from "react";

interface BookDescpriptionProps{
    description: string | any;
    [key:string]:any
 }
 
const BookDescpription: FC<BookDescpriptionProps> = ({description}) => {
    return ( 
        <div className="flex px-4 border-l mt-10 w-full lg:pl-20">
            <p className="text-sm mt-5">
                {description}
            </p>
        </div> 
    );
}
 
export default BookDescpription;