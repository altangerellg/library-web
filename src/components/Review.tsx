import { FC } from "react";

interface ReviewProps {
    
}
 
const Review: FC<ReviewProps> = () => {
    return ( 
        <div className="flex flex-col w-full border-b my-2">
                <p className="font-bold my-2">James Bond</p>
                <p className="my-3">What a greate BOOOOOK!!!</p>
                <p className="text-gray-600 my-4 text-xs">2023-07-22</p>
        </div>
     );
}
 
export default Review;