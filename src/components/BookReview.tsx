"use client";
import IReview from "@library/types/IReview";
import { FC, useEffect, useState } from "react";
import Review from "./Review";
import axios from "axios";
import useSession from "@library/hooks/useSession";
interface BookReviewProps{
    reviews: IReview[];
    bookId: string;
    onWriteReview: (review: IReview) => void;
}

const BookReview: FC<BookReviewProps> = ({ 
    reviews,bookId,onWriteReview
 }) => {
    const [review,setReview] = useState<string>();
    const {user} = useSession();
    const onChangeReview = (e:any) => {
        if(e.target.value.trim() !== "")
        setReview(e.target.value)
    }

    const onFormSubmit = async(e:any) =>{
        e.preventDefault();
        const values = {
            bookId: bookId,
            reviewContent: review
        }
        try{
            console.log(values)
            const res = await axios.post("/api/review",values,{
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            })
            onWriteReview(res.data.content)
            setReview("")
        }catch(err){

        }
    }

    return (
        <div className="flex px-4 border-l w-full mt-10 px-1 flex-wrap lg:pl-20">
            {user ?
            <div className="flex w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Сэтгэгдэл бичих:</label>
                    <textarea name="review" value={review} onChange={onChangeReview} placeholder="Сэтгэгдэлээ бичнэ үү..." rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    <div className="w-full flex justify-end">
                        <button type="submit" className="mt-5 bg-main text-white px-10 py-2">Бичих</button>
                    </div>
                </form>
            </div>
            : <></>}
            {reviews.map((e: IReview, index: number) => {
                return <Review {...e} key={index} />;
            })}
        </div>
    );
};

export default BookReview;
