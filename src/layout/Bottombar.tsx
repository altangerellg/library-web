import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface BottombarProps {
    [key: string]: any
}

const Bottombar: FC<BottombarProps> = props => {
    return <div className="lg:flex py-12 px-12 lg:justify-between items-center border-t-[1px] justify-center">
        <div className="flex justify-center items-center">
            <p>Эрдэнэт үйлдвэр төрийн өмчит үйлдвэрийн газар</p>
        </div>
        <div className="flex justify-center items-center mt-5 lg:mt-0">
            <Image
                className="mx-3"
                alt="MasterCard"
                src="/gok.png"
                width={60}
                height={40}
            />
            <Image
                className="mx-3"
                alt="PayPal"
                src="/tis.png"
                width={60}
                height={40}
                />
            <Image
                className="mx-5"
                alt="visa"
                src="/iso.png"
                width={60}
                height={40}
                /> 
            <Image
            className="mx-5"
            alt="skrill"
            src="/iso1.png"
            width={60}
            height={40}
            />
        </div>
    </div>
}

export default Bottombar;
