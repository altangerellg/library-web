"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

interface FooterProps {
    [key: string]: any;
}

const Footer: FC<FooterProps> = (props) => {
    const router = useRouter();
    const handleClick = async () => {
        router.push("/about");
    };
    const handleClick1 = async () => {
        router.push("/help");
    };
    const handleClick2 = async () => {
        router.push("/question");
    };
    return (
        <div className="flex lg:px-12 px-0 py-8 justify-center flex-col lg:justify-between lg:flex-row">
            <div className="lg:w-1/2">
                <Image className="" alt="logo" src="/eit.png" width={120} height={26.3} />
                <p className="flex mt-6 justify-center lg:justify-start">Орхон аймаг, Баян-Өндөр сум, Шагдарын Отгонбилэгийн гудамж, “Эрдэнэт цогцолбор” дээд сургууль</p>
                <p className="flex mt-6 justify-center lg:justify-start "> techinst@erdenetmc.mn</p>
                <p className="flex mb-6 justify-center lg:justify-start">+976 75773415</p>
                <div className="flex justify-center items-center lg:justify-start">
                    <AiOutlineInstagram className="mr-5 text-2xl" />
                    <BiLogoFacebook className="mr-5 text-2xl" />
                    <BsYoutube className="mr-5 text-2xl" />
                    <BsTwitter className="mr-5 text-2xl" />
                    <BsPinterest className="mr-5 text-2xl" />
                </div>
            </div>
            <div className="flex ml-2 flex-col w-screen justify-center lg:flex lg:w-1/2 lg:flex-row">
                <div className=" flex w-full">
                    <p className="cursor-pointer py-2 w-full text-center" onClick={handleClick}>
                        Бидний тухай
                    </p>
                </div>
                <div className="flex w-full">
                    <p className="cursor-pointer py-2 w-full text-center" onClick={handleClick1}>
                        Тусламж
                    </p>
                </div>
                <div className="flex w-full">
                    <p className="cursor-pointer py-2 w-full text-center" onClick={handleClick2}>
                        Түгээмэл асуултууд
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
