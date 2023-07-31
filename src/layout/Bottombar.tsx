import Image from "next/image";
import React, { FC } from "react";

interface BottombarProps {
    [key: string]: any
}

const Bottombar: FC<BottombarProps> = props => {
    return <div className="lg:flex hidden w-fix py-12 px-12 justify-between items-center border-t-[1px]">
        <div className="flex justify-start items-center">
            <p>2023 Book Store. All rights reserved</p>
        </div>
        <div className="flex justify-end items-center">
            <Image
                className="mx-3"
                alt="MasterCard"
                src="/mastercard.png"
                width={60}
                height={40}
            />
            <Image
                className="mx-3"
                alt="PayPal"
                src="/paypal1.png"
                width={60}
                height={40}
                />
            <Image
                className="mx-5"
                alt="visa"
                src="/visa.png"
                width={60}
                height={40}
                /> 
            <Image
            className="mx-5"
            alt="skrill"
            src="/skrill.png"
            width={60}
            height={40}
            />
        </div>
    </div>
}

export default Bottombar;
