import SearchContext from "@library/context/SearchContext";
import { useContext } from "react";

export default function useFilter() {
    const context = useContext(SearchContext);
    return context;
}
