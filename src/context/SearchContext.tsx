import IFilter from "@library/types/IFilter";
import { Context, useEffect, FC, createContext, useState } from "react";

export const defaultValues: IFilter = {};
const SearchContext: Context<IFilter> = createContext(defaultValues);

export const SearchProvider: FC<any> = ({ children, ...props }) => {
    const [filter, setFilter] = useState<IFilter>({});

    const onChangeFilter = (e: any) => {
        setFilter((f) => ({
            ...f,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
    }, [filter]);

    return <SearchContext.Provider value={{ filter, onChangeFilter }}>{children}</SearchContext.Provider>;
};

export default SearchContext;
