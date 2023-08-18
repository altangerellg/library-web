import ICategory from "@library/types/ICategory";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import IconButton from "./IconButton";
import { AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import useFilter from "@library/hooks/useFilter";
interface FeaturedCategoriesProps {}

const FeaturedCategories: FC<FeaturedCategoriesProps> = () => {
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
        <div className="mx-10" style={{ marginTop: 80 }}>
            <header className="flex justify-between items-center" style={{ marginBottom: 40 }}>
                <motion.h2
                    className="text-3xl font-bold my-4"
                    style={{ marginLeft: 40 }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    Featured Categories
                </motion.h2>
                <Link href="/search">
                    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                        All Categories...
                    </motion.div>
                </Link>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <Link href={""}>
                {categories &&
                    categories.map((e: ICategory, index: number) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.5, duration: 0.4 }}
                               
                            >
                                {e.name}
                            </motion.div>
                        );
                    })}
                    </Link>
            </div>
            
        </div>
    );
};
export default FeaturedCategories;
