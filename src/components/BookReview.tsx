import IReview from "@library/types/IReview";
import { FC } from "react";
import Review from "./Review";

interface BookReviewProps{
    
}
 
const BookReview: FC<BookReviewProps> = ({...props}) => {
    return ( 
        <div className="flex px-4 border-l w-full mt-10 px-1 flex-wrap lg:pl-20">
            <Review />

            <Review />

            <Review />
        </div> 
    );
}
 
export default BookReview;