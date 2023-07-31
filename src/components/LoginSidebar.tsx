import React, { FC, MouseEventHandler, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoginSidebarProps {
    onHide: MouseEventHandler<HTMLDivElement>;
    [key: string]: any;
}
const Sidebar: FC<LoginSidebarProps> = ({ onHide, show, ...props }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
    }
    return (        
        <AnimatePresence>
            {show && (
                <motion.div
                    onClick={onHide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-end fixed top-0 right-0 w-screen h-screen bg-black/70"
                >
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        className="max-w-[600px] min-w-[300px] shadow-xl h-screen bg-white z-[999] text-white items-center flex flex-col justify-center"
                    >
                        <p className="flex justify-center items-center font-bold text-3xl text-black ">
                            Нэвтрэх
                        </p>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <label className="block text-gray text-black mb-2" htmlFor="email">E-mail</label>
                                    <input 
                                    className="border bg-gray-50 text-gray-800 rounded-lg" 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)} 
                                    required>
                                    </input>
                                </div>
                                <div>
                                    <label className="block text-black mb-2" htmlFor="password">Password</label>
                                    <input 
                                    className="border bg-white " 
                                    type="email" 
                                    id="email" 
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)} 
                                    required>
                                    </input>
                                </div>
                                <div className="flex justify-center">
                                <button className="flex mt-5 border text-black" type="submit">Нэвтрэх</button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
