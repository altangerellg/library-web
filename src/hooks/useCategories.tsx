import React, {FC,useState,useEffect, useCallback} from "react";
import axios from "axios";
import ICategory from "@library/types/ICategory";

const useCategories = () => {
    const [categories, setCategories] = useState<Array<ICategory>>();
    const fetchCategories = useCallback(async() => {
        try{
            const res = await axios.post(
                "/api/category/find",
                [
                    {parent: null,},
                ]
            );
            setCategories(res.data.content);
        }catch(err){}
    },[]);

    useEffect(()=>{
        fetchCategories();
    },[fetchCategories])
    return {categories};    
}
export default useCategories;

