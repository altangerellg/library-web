"use client";
import IUser from "@library/types/IUser";
import { useRouter } from "next/navigation";
import { FC, createContext, useEffect, useState } from "react";

const SessionContext: any = createContext({});

export const SessionProvider: FC<any> = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        if (!Boolean(user?.firstname)) {
            let tmp = localStorage.getItem("data");
            if (tmp) {
                setUser(JSON.parse(tmp));
            }
        } else {
        }
    }, [user]);
    return <SessionContext.Provider value={{ user, setUser }}>{children}</SessionContext.Provider>;
};

export default SessionContext;
