import React, { FC, MouseEventHandler, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./LoginForm";

interface LoginSidebarProps {
    onHide: MouseEventHandler<HTMLDivElement>;
    toggleSidebar: () => void;
    [key: string]: any;
}
const Sidebar: FC<LoginSidebarProps> = ({ onHide, show,toggleSidebar, ...props }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    id="modal-backdrop"
                    onClick={onHide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex z-30 justify-end fixed top-0 right-0 w-screen h-screen bg-black/70"
                >
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        className="max-w-[600px] min-w-[300px] shadow-xl h-screen bg-white z-50 text-white items-center flex flex-col justify-center"
                    >
                        <p className="flex justify-center items-center font-bold text-3xl text-black ">Нэвтрэх</p>
                        <LoginForm toggleSidebar={toggleSidebar}/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
