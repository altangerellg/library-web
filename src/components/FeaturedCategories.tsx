import ICategory from "@library/types/ICategory";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
interface FeaturedCategoriesProps {}

const FeaturedCategories: FC<FeaturedCategoriesProps> = () => {
    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [pages, setPages] = useState<number>(1)
    const [sizes, setSizes] = useState<number>(4);
    const [totalPage, setTotalPage] = useState<number>(1);
    const router = useRouter();
    const fetchCategories = async (values: any) => {
        try {
            const response = await axios.post("/api/category/find", values, {
                params: { pages, sizes, order: "asc", sort: "name" },
            });
            setCategories(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {
            console.log(error);
        }
        [pages, sizes];
    };
    useEffect(() => {
       fetchCategories({});
        //eslint-disable-next-line
    }, [pages, sizes]);
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
