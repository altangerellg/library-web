import React, { FC } from "react";
import { BiListUl, BiSolidGrid } from "react-icons/bi";
interface SortControlBarProps {
    books:number;
    page:number;
    size:number;
    onChangeSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortControlBar: FC<SortControlBarProps> = ({books,page,size, onChangeSize}) => {
    return (
        <div className="flex justify-between items-end ">
            <div className="flex text-lg">
                <p>{books} илэрцээс {page+1}-{size*(page+1)}-г харуулж байна</p>
            </div>
            <div className="flex items-center">
                <form className="text-xl">
                    <select name="sort"
                        className="border-b border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5 outline-0"
                    >
                        <option selected className="">
                            А-Я
                        </option>
                        <option value="a-z">Я-А</option>
                        <option value="popularity">Хамгийн эрэлттэй</option>
                        <option value="latest">Сүүлийн үеийн</option>
                    </select>
                </form>
                <form className="ml-5" >
                    <select name="bookNumber"
                        className="border-b border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5 outline-0"
                    onChange={onChangeSize}>
                        <option defaultValue="20" >Эхний 20</option>
                        <option value="40">Эхний 40</option>
                        <option value="80">Эхний 80</option>
                        <option value="all">Бүгд</option>
                    </select>
                </form>
                <ul className="flex items-center ml-5 ">
                    <li className="border p-1 cursor-pointer ">
                        <BiListUl className="text-3xl" />
                    </li>
                    <li className="border p-1 cursor-pointer">
                        <BiSolidGrid className="text-3xl" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SortControlBar;
