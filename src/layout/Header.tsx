"use client";
import HeaderCats from "@library/components/HeaderCat";
import useFilter from "@library/hooks/useFilter";
import ICategory from "@library/types/ICategory";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuLeftAlt } from "react-icons/cg";
import {FaPlus} from "react-icons/fa"

interface HeaderProps {
    [key: string]: any;
}

const Header: FC = (props: HeaderProps) => {
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [searchQuery, setSearchQuery] = useState<string>();
    const {onChangeFilter } = useFilter();
    const router = useRouter();
    const [menuClicked, setMenuClicked] = useState<boolean>(false);

    const onClickMenu = () => {
        setMenuClicked(!menuClicked)
    }
    const onChangeQuery = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const onSubmitSearch = (e: any) => {
        e.preventDefault();
        onChangeFilter({target: {name:"searchQuery", value: String(searchQuery)}})
        router.push("/search");
    };

    const fetchCategories = useCallback(async () => {
        try {
            const response = await axios.post("/api/category/find?page=0&size=10000", [
                {
                    parent: null,
                },
            ]);

            setCategories(response.data.content);
        } catch (error) {}
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <div className="flex lg:px-12 px-0 py-8 border-b-[1px] shadow-sm">
            <div className="flex items-center justify-start mr-10">
                <div>
                    <CgMenuLeftAlt className="text-4xl lg:hidden" onClick={onClickMenu}/>
                    </div>
                    <Link href="/">
                <Image
                className="mr-5 ml-5"
                alt="logo"
                src="/eit.png"
                width={80}
                height={26.3}
            />        
            </Link>
            </div>
            <div className={menuClicked ?
            "flex absolute z-30 top-0 right-0 flex-col w-screen h-screen justify-between py-32 bg-white items-center":
            "hidden lg:flex"    
            }>
                <FaPlus className="absolute top-5 left-5 rotate-45 lg:hidden" onClick={onClickMenu}/>
                {/* <div className="mr-6 ml-7 ">
                   <Link href={"/"}> <strong><p>Нүүр хуудас</p></strong></Link>
                </div> */}
                    {/* {categories.map((category: ICategory, index: number) => {
                        return (
                            <div className="mr-6" key={`category-${index}`}>
                                <button>{category.name}</button>
                            </div>
                        );
                    })} */}
            </div>
            {/* <HeaderCats /> */}
            <div className="flex grow justify-end items-center ">
                <div className="flex justify-start items-center bg-zinc-100 p-2 ">
                    <form
                        onSubmit={(e: any) => {
                            e.preventDefault();
                            onSubmitSearch(e);
                        }}
                        className="flex justify-start items-center"
                    >
                        <input
                            name="search"
                            className="grow outline-none bg-transparent"
                            placeholder="Хайх утгаа оруулна уу"
                            value={searchQuery}
                            onChange={onChangeQuery}
                        />
                        <button type="submit" className="flex justify-between items-center">
                            <AiOutlineSearch className="text-zinc-500 mx-2"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;
