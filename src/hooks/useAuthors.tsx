import React, {FC,useState,useEffect, useCallback} from "react";
import axios from "axios";
import IAuthor from "@library/types/IAuthor";

const useAuthors = () => {
    const [authors, setAuthors] = useState<Array<IAuthor>>();
    const fetchAuthors = useCallback(async() => {
        try{
            const res = await axios.post(
                "/api/author/find",[]
            );
            setAuthors(res.data.content);
        }catch(err){}
    },[]);

    useEffect(()=>{
        fetchAuthors();
    },[fetchAuthors])
    return {authors};    
}
export default useAuthors;

