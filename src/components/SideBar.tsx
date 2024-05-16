import React, { FC, useState } from "react";
import DropDown from "./DropDown";
import useCategories from "@library/hooks/useCategories";
import ICategory from "@library/types/ICategory";
import useFilter from "@library/hooks/useFilter";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = (props) => {
    const { categories } = useCategories();
    const { onChangeFilter } = useFilter();
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
        onChangeFilter({ target: { name: "category", value: categoryId } });
    };

    return (
        <div className="flex flex-col lg:w-80 w-screen px-3 mb-4">
            <DropDown title="Ангилал">
                <ul>
                    <li className="mb-3">
                    Бүгд
                    </li>
                </ul>
                <ul>
                    {categories?.map((category: ICategory, index: number) => (
                        <li
                            onClick={() => handleCategoryClick(category._id)}
                            className="mb-3"
                            style={{
                                border: selectedCategory === category._id ? "2px solid black" : "none",
                                // Add more inline styles as needed
                            }}
                            key={`category-${index}`}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
               
            </DropDown>
        </div>
    );
};

export default SideBar;
