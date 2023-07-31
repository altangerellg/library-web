import React, { FC } from "react";
import {BiRightArrow,BiSolidLeftArrow} from "react-icons/bi"
interface PaginationProps {
    totalPage: number;
    page:number;
    onChangePage: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({totalPage,page, onChangePage}) => {
    const pages = [...Array(totalPage)].map((_, index) => (
        <li onClick={()=>onChangePage(index)} key={index} className={index+1===page ? "bg-gray-900 border px-3.5 text-md py-1 block mx-1 cursor-pointer hover:bg-gray-900 text-white" : "border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 hover:text-white" } >
        {index+1}
        </li>
    ));

    const nextPage = () =>{
        onChangePage(page);
    }
    const prevPage = () => {
        onChangePage(page-2);
    }
    return (
        <div className="flex w-full mt-10">
            <ul className="flex w-full flex-nowrap justify-center items-center text-lg">
                <li onClick={prevPage} className={page === 1 ? "hidden": "border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 text-md hover:text-white"}>
                    <p>Өмнөх</p>
                </li>
                {pages} 
                <li onClick={nextPage} className={page === totalPage ? "hidden" : "border  py-1 px-3.5 py-№ block mx-1 cursor-pointer hover:bg-gray-900 text-md hover:text-white"}>
                    <p>Дараах</p>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
