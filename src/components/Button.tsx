import React, { FC } from "react";
import { ImSpinner3, ImSpinner5 } from "react-icons/im";
import { motion } from "framer-motion";
interface ButtonProps {
    variant?: "filled" | "outlined" | "subtle";
    [key: string]: any;
}

const Button: FC<ButtonProps> = ({ className, children, loading = false, ...props }) => {
    return (
        <button
            disabled={loading}
            className={`bg-black/90 hover:bg-black text-center w-full p-4 ${className} ${loading && "cursor-wait"}`}
            {...props}
        >
            {loading ? (
                // <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                <p className="flex justify-center items-center text-white">
                    <ImSpinner3 className="animate-spin mr-4 text-white" />
                    <p className=" text-white">Түр хүлээнэ үү</p>
                </p>
            ) : (
                // </motion.span>
                children
            )}
        </button>
    );
};

export default Button;
