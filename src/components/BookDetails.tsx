import IBook from "@library/types/IBook";
import React, { FC, useState } from "react";
import BookDescpription from "./BookDescription";
import BookReview from "./BookReview";
import { Extension } from "typescript";

interface BookDetailsProps extends IBook{
}
 
const BookDetails: FC<BookDetailsProps> = ({description}) => {
    const [clickedDetail,setClickedDetail] = useState("desc");
    const onChangeDetail = (detail: string) =>{
        setClickedDetail(detail)
    }
    return ( 
        <div className="flex w-full flex-col px-5 mt-10 lg:flex-row border-t-2">
            <div className="flex w-full border-t pt-10 flex-wrap lg:justify-items-start lg:items-start lg:flex-col lg:w-1/5 lg:border-t-0">
                <p onClick={()=>onChangeDetail("desc")} className={clickedDetail === "desc" ? "w-1/2 text-center border-b-2 mx-5 text-main font-medium pb-3 lg:w-full lg:mx-1 lg:pb-1 lg:mt-5 lg:px-3 cursor-pointer" : "w-1/2 text-center mx-5 text-gray-500 pb-3 lg:w-full lg:mx-1 lg:pb-1 lg:mt-5 lg:px-3 cursor-pointer"}>Тайлбар</p>
                <p onClick={()=>onChangeDetail("review")} className={clickedDetail === "review" ? "w-1/2 text-center border-b-2 mx-5 text-main font-medium pb-3 lg:w-full lg:mx-1 lg:pb-1 lg:mt-5 lg:px-3 cursor-pointer" : "w-1/2 text-center mx-5 text-gray-500 pb-3 lg:w-full lg:mx-1 lg:pb-1 lg:mt-5 lg:px-3 cursor-pointer"}>Cэтгэгдэл</p>
            </div>
            <div className="flex w-full lg:w-4/5 lg:ml-5">
                {clickedDetail === "desc" ? <BookDescpription description={description}/> : <BookReview/>}
            </div>
        </div>
     );
}
 
export default BookDetails;