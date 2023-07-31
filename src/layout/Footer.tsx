"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

interface FooterProps {
    [key: string]: any
}

const Footer: FC<FooterProps> = props => {
    const router = useRouter()
    const handleClick = async ()=>{
        router.push("/about")
    }
    const handleClick1 = async ()=>{
        router.push("/help")
    }
    const handleClick2 = async ()=>{
        router.push("/question")
    }
    return <div className="flex lg:px-12 px-0 py-8 ">
        <div className="w-[40%]">
            <Image
                className=""
                alt="logo"
                src="/logo.png"
                width={120}
                height={26.3}
            />
            <p className="flex mt-6">
            1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>
            <p className="flex mt-6">
                sale@bookstore.com
            </p>
            <p className="flex mb-6">
                +976 99119911
            </p>
            <div className="flex justify-start items-center">
            <AiOutlineInstagram className="mr-5 text-2xl"/>
            <BiLogoFacebook className="mr-5 text-2xl"/>
            <BsYoutube className="mr-5 text-2xl"/>
            <BsTwitter className="mr-5 text-2xl"/>
            <BsPinterest className="mr-5 text-2xl"/>
            </div>
        </div>
        <div className="w-[60%] flex ml-5">
            <div className="w-[30%] flex justify-start">
            <p className=" cursor-pointer flex" onClick={handleClick}>
                Бидний тухай
            </p>
            </div>
            <div className="w-[30%] flex">
            <p className=" cursor-pointer" onClick={handleClick1}>
                Тусламж
            </p>
            </div>
            <div className="w-[30%] flex">
            <p className="cursor-pointer" onClick={handleClick2}>
                Түгээмэл асуултууд
            </p>
            </div>
        </div>
    </div>
}

export default Footer;