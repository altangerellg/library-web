    "use client";
    import HeaderCats from "@library/components/HeaderCat";
    import useFilter from "@library/hooks/useFilter";
import useSession from "@library/hooks/useSession";
    import ICategory from "@library/types/ICategory";
    import axios from "axios";
    import Image from "next/image";
    import Link from "next/link";
    import { useRouter } from "next/navigation";
    import React, { FC, useCallback, useEffect, useState } from "react";
    import { AiOutlineSearch } from "react-icons/ai";
    import { CgMenuLeftAlt } from "react-icons/cg";
    import {FaPlus} from "react-icons/fa"
import { HiUser } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import LoginSidebar from "@library/components/LoginSidebar";

    interface HeaderProps {
        [key: string]: any;
    }

    const Header: FC = (props: HeaderProps) => {
        const [categories, setCategories] = useState<Array<ICategory>>([]);
        const [searchQuery, setSearchQuery] = useState<string>();
        const {onChangeFilter } = useFilter();
        const router = useRouter();
        const [menuClicked, setMenuClicked] = useState<boolean>(false);
        const [loginSidebar, setLoginSidebar] = useState(false);
        const { user, setUser } = useSession();
        const [clicked, setClicked] = useState(false);
        const onClickProfile = () =>{
        
        setClicked(!clicked)
    }
    const logout = () =>{
        localStorage.removeItem("data");
        setUser(undefined)
    };
    const toggleSidebar = () => {
        setLoginSidebar((s) => !s);
    };
    useEffect(() => {}, [user]);

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
            <div className="flex lg:px-12 px-0 py-8 border-b-[5px] shadow-sm">
                <div className="flex items-center justify-start mr-10">
                    <div>
                        <CgMenuLeftAlt className="text-4xl lg:hidden" onClick={onClickMenu}/>
                        </div>
                        <Link href="/">
                    <Image
                    className="mr-5 ml-5"
                    alt="logo"
                    src="/eit.png"
                    width={100}
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
                <div className="flex grow justify-center items-center ">
                    <div className="flex justify-start items-center bg-zinc-50 p-2 ">
                        <form
                            onSubmit={(e: any) => {
                                e.preventDefault();
                                onSubmitSearch(e);
                            }}
                            className="flex justify-start items-center"
                        >
                            <input
                                name="search"
                                className="grow outline-none bg-transparent border border-gray-300 rounded-full px-3 py-1 "
                                size={60}
                                placeholder="Хайх утгаа оруулна уу"
                                value={searchQuery}
                                onChange={onChangeQuery}
                            />
                            <button type="submit" className="flex justify-between items-center ">
                                <AiOutlineSearch className="text-zinc-500 mx-2" size={25}/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                {user?.lastname ? (
                    <div className="relative bg-white w-auto">
                        <div className="relative cursor-pointer px-3" onClick={onClickProfile}>
                            {user.firstname + ". " + user.lastname}
                        </div>
                        {clicked?
                        <div className="w-full absolute top-5 border border-t-0 right-0 mt-2 flex-col px-3 flex bg-white z-10">
                            <p className="flex justify-end cursor-pointer" onClick={()=>router.push("/profile")}>Profile</p>
                            <p className="flex justify-end cursor-pointer" onClick={logout}>Logout</p>
                            </div>:<></>}
                    </div>
                ) : (
                    <HiUser className="mr-2 text-xl cursor-pointer" onClick={toggleSidebar} />
                )}
                <BsBag className="mr-2 ml-4 text-xl" />
            </div>
            <LoginSidebar
                toggleSidebar={toggleSidebar}
                onHide={(e) => {
                    if ((e.target as HTMLInputElement).id === "modal-backdrop") setLoginSidebar((s) => !s);
                }}
                show={loginSidebar}
            />
            </div>
        );
    };

    export default Header;
