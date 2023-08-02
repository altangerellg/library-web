"use client";
import useFilter from "@library/hooks/useFilter";
import ICategory from "@library/types/ICategory";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuLeftAlt } from "react-icons/cg";

interface HeaderProps {
    [key: string]: any;
}

const Header: FC = (props: HeaderProps) => {
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [searchQuery, setSearchQuery] = useState<string>();
    const {onChangeFilter } = useFilter();
    const router = useRouter();
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
                <CgMenuLeftAlt className="text-4xl" />
                <Image className="mx-10" alt="logo" src="/logo.png" width={80} height={26.3} />
            </div>
            <div className="flex justify-start items-center">
                <div className="mr-6">
                    <p>Нүүр хуудас</p>
                </div>
                {categories.map((category: ICategory, index: number) => {
                    return (
                        <div className="mr-6" key={`category-${index}`}>
                            <p>{category.name}</p>
                        </div>
                    );
                })}
            </div>
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
// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Home() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-6">
//             <div className="relative flex h-12 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-1 w-3" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-3 w-3" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="h-3 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-4 sm:block">
//                   <div className="flex space-x-2">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? 'bg-gray-900 text-white'
//                             : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-2 py-1 text-xs font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-5 w-5" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="flex rounded-full bg-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-6 w-6 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-2 py-1 text-xs font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
