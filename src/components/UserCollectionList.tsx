import ICollection from "@library/types/ICollection";
import { FC, useState, useEffect, useCallback } from "react";
import { BsPlusSquareDotted, BsSendDashFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { LuCopyPlus } from "react-icons/lu";
import NewCollection from "./NewCollection";
import axios from "axios";
import useSession from "@library/hooks/useSession";
import IBook from "@library/types/IBook";
interface UserCollectionListProps extends ICollection {
    book: IBook;
}

const UserCollectionList: FC<UserCollectionListProps> = ({ book }) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [newCollection, setNewCollection] = useState<boolean>(false);
    const [collections, setCollections] = useState<Array<ICollection>>();
    const [checkedCollections, setCheckedCollections] = useState<{ [key: string]: boolean }>({});
    const { user } = useSession();
    const onClickCollection = () => {
        setClicked(!clicked);
    };
    const toggleNewCollection = () => {
        setNewCollection(!newCollection);
    };
    const hasBook = useCallback(
        (collection: any) => {
            return collection.books.some((e: any) => e._id === book._id);
            //eslint-disable-next-line
        },
        [book]
    );
    const handleChangeCollection = async (e: any) => {
        const isChecked = e.target.checked;
        const copiedCollections = structuredClone(collections) || [];
        for (const collection of copiedCollections) {
            if (collection._id === e.target.id) {
                if (isChecked) {
                    collection.books?.push(book);
                } else {
                    const index = collection.books?.indexOf(book);
                    index && collection.books?.splice(index, 1);
                }
                try {
                    await axios.put(
                        `/api/collection/${collection._id}`,
                        { books: collection.books },
                    );
                } catch (err) {}
            }
        }
        fetchUserCollection();
    };
    const fetchUserCollection = async () => {
        try {
            const res = await axios.post(
                "/api/collection/find/user",
                {},
            );
            setCollections(res.data.content);
        } catch (err) {}
    };

    useEffect(() => {
        fetchUserCollection();
        //eslint-disable-next-line
    }, [newCollection]);

    return (
        <>
            <div className="relative flex justify-center items-center w-full mt-8 md:w-1/2 lg:mt-0 flex-col">
                <button className="relative w-full flex justify-center items-center" onClick={onClickCollection}>
                    {!clicked ? (
                        <BsPlusSquareDotted className="text-2xl mx-1" />
                    ) : (
                        <AiOutlineMinus className="text-md mx-2" />
                    )}
                    <p className="mx-1">Цуглуулганд нэмэх</p>
                </button>
                <div className="w-full flex ">
                    <div
                        className={
                            clicked
                                ? "absolute block bg-white w-full max-h-52 overflow-y-auto pl-5  "
                                : "absolute hidden"
                        }
                    >
                        {collections?.map((collection: ICollection, index: number) => {
                            return (
                                <div key={index} className="mt-3">
                                    <input
                                        type="checkbox"
                                        id={collection._id}
                                        name="collection"
                                        value={collection.name}
                                        onChange={handleChangeCollection}
                                        checked={hasBook(collection)}
                                    ></input>
                                    <label htmlFor={collection._id}> {collection.name}</label>
                                </div>
                            );
                        })}
                        <div className="flex mt-3 item-center cursor-pointer" onClick={toggleNewCollection}>
                            <LuCopyPlus className="mr-2" />
                            <p>Шинэ цуглуулга</p>
                        </div>
                    </div>
                </div>
            </div>
            {newCollection ? (
                <NewCollection
                    toggleNewCollection={toggleNewCollection}
                    onHide={(e: any) => {
                        if ((e.target as HTMLInputElement).id === "modal-backdrop") toggleNewCollection();
                    }}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default UserCollectionList;
