import React, { FC } from "react";

interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => {
    return (
        <div className="flex w-full mt-10">
            <ul className="flex w-full flex-nowrap justify-center items-center text-lg">
                <li className="border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 hover:text-white">
                    Өмнөх
                </li>
                <li className="border px-3.5 py-1 block mx-1 cursor-pointer bg-gray-900 text-white">1</li>
                <li className="border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 hover:text-white">2</li>
                <li className="border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 hover:text-white">3</li>
                <li className="border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 hover:text-white">4</li>
                <li className="border px-3.5 py-1 block mx-1 cursor-pointer hover:bg-gray-900 hover:text-white">
                    Дараах
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
