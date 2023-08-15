import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import useSession from "@library/hooks/useSession";
import ICollection from "@library/types/ICollection";

interface CollectionListProps {}

const CollectionList: FC<CollectionListProps> = () => {
    const [collections, setCollections] = useState<Array<ICollection>>([]);
    const { user } = useSession();
    const fetchCollections = async () => {
        try {
            const response = await axios.post("/api/collection/find/user", {});
            setCollections(response.data.content);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCollections();
        console.log(collections);
        //eslint-disable-next-line
    }, []);
    return (
        <div>
            {collections.map((collection, index: number) => {
                return (
                    <div key={index}>
                        <CollectionCard {...collection}/>
                    </div>
                );
            })}
        </div>
    );
};
export default CollectionList;
