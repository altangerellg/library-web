import Link from "next/link";
import { Component, FC, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ICategory from "@library/types/ICategory";
interface HeaderCatsProps {}

const HeaderCats: FC<HeaderCatsProps> = () => {
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const fetchCategories = useCallback(async () => {
        try {
            const response = await axios.post("/api/category/find?page=0&size=10000", 
                {
                    parent: null,
                },
            );

            setCategories(response.data.content);
        } catch (error) {}
    }, []);
    useEffect(() => {
        fetchCategories();
        //eslint-disable-next-line
    }, []);

    return (
        <div className="mx-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
            <Link href={"/search"}>
            {categories.map((category: ICategory, index: number) => {
                        return (
                            <div className="mr-6" key={`category-${index}`}>
                                <button>{category.name}</button>
                            </div>
                        );
                    })}
                    </Link>
            </div>
        </div>
    );
};
export default HeaderCats;
