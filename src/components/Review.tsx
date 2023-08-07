import IReview from "@library/types/IReview";
import { FC } from "react";

interface ReviewProps extends IReview{
    
}
 
const Review: FC<ReviewProps> = ({
    user,
    reviewContent,
    date,
}) => {
    return ( 
        <div className="flex flex-col w-full border-b my-2">
                <p className="font-bold my-2">{user.firstname + " " + user.lastname}</p>
                <p className="my-3 text-sm text-gray-700">{reviewContent}</p>
                <p className="text-gray-600 my-4 text-xs">{date.substring(0,10)}</p>
        </div>
     );
}
 
export default Review;