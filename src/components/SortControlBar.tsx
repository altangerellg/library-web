import React, { FC, useState } from "react";
import { BiListUl, BiSolidGrid } from "react-icons/bi";
interface SortControlBarProps {
    books:number;
    page:number;
    size:number;
    onChangeSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeType: (bookType: string) => void;
    onChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
 
}

const SortControlBar: FC<SortControlBarProps> = ({books,page,size, onChangeSize,onChangeType, onChangeSort}) => {
    const [cardType, setCardType] = useState(true);
    const onClickedButton = (isCard: boolean) => {
        setCardType(isCard);
    }
    return (
        <div className="flex justify-between items-end flex-wrap">
            <div className="flex lg:text-md text-sm mb-1 w-full justify-center md:w-1/3">
                <p>{books} илэрцээс {page+1} - {size*(page+1)}-г харуулж байна</p>
            </div>
            <div className="flex items-center md:justify-end justify-between w-full flex-col md:flex-row md:w-3/5">
                <form className="text-xl mb-3 md:mb-0">
                    <select name="sort"
                        onChange={onChangeSort}
                        className="border-b border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5 outline-0"
                    >
                        <option value="name">Нэрээр</option>
                        <option value="publicationDate">Сүүлд нэмэгдсэн</option>
                        <option value="totalViews">Их үзэлттэй</option>
                    </select>
                </form>
                <form className="lg:pl-5 lg:block hidden" >
                    <select name="bookNumber"
                        className="border-b border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5 outline-0"
                    onChange={onChangeSize}>
                        <option value="20" >Эхний 20</option>
                        <option value="40">Эхний 40</option>
                        <option value="80">Эхний 80</option>
                        <option value="all">Бүгд</option>
                    </select>
                </form>
                <ul className="flex items-center ml-5">
                    <li onClick={()=>{onChangeType("card"); onClickedButton(true)}} className="border p-1 cursor-pointer">
                        <BiSolidGrid className={cardType?"text-3xl text-gray-900":"text-gray-300 text-3xl"} />
                    </li>
                    <li onClick={()=>{onChangeType("list"); onClickedButton(false)}} className="border p-1 cursor-pointer">
                        <BiListUl className={cardType ? "text-gray-300 text-3xl":"text-gray-900 text-3xl"} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SortControlBar;
