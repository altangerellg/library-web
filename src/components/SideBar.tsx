import React, { FC, useState } from "react";
import DropDown from "./DropDown";
import useCategories from "@library/hooks/useCategories";
import useAuthors from "@library/hooks/useAuthors";
import ICategory from "@library/types/ICategory";
import IAuthor from "@library/types/IAuthor";
import useFilter from "@library/hooks/useFilter";
interface SideBarProps {}

const SideBar: FC<SideBarProps> = (props) => {
    const { categories } = useCategories();
    const { authors } = useAuthors();

    const { onChangeFilter } = useFilter();
    return (
        <div className="flex flex-col lg:w-80 w-screen px-3 mb-4">
            <DropDown title="Ангилал">
                <ul>
                    {categories?.map((category: ICategory, index: number) => {
                        return (
                            <li
                                value={category.value}
                                onClick={(e: any) =>
                                    onChangeFilter({ target: { name: "category", value: category._id } })
                                }
                                className="mb-3"
                                key={`category-${index}`}
                            >
                                {category.name}
                            </li>
                        );
                    })}
                </ul>
            </DropDown>
            <DropDown title="Зохиогч">
                <ul>
                    {authors?.map((author: IAuthor, index: number) => {
                        return (
                            <li
                                onClick={(e: any) =>
                                    onChangeFilter({ target: { name: "author", value: author._id } })
                                }
                                className="mb-3"
                                key={`author-${index}`}
                            >
                                {author.firstname}
                            </li>
                        );
                    })}
                </ul>
            </DropDown>
            <DropDown title="Формат">
                <ul>
                    <li className="mb-3">PDF</li>
                    <li className="mb-3">EPUB</li>
                </ul>
            </DropDown>
        </div>
    );
};

export default SideBar;
