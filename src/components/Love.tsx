import { FC, useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import useSession from "@library/hooks/useSession";
interface LoveProps {
    bookId: string;
    currLove: number;
    isLoved: boolean;
}

const Love: FC<LoveProps> = ({ bookId, currLove, isLoved }) => {
    const [loved, setLoved] = useState<boolean>(isLoved);
    const [loves, setLoves] = useState<number>(currLove);
    const { user } = useSession();
    const fetchLoves = async () => {
        try {
            if (!loved) {
                const res = await axios.put(
                    `/api/book/love/${bookId}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                );
                setLoves(res.data.loves);
            } else {
                const res = await axios.put(
                    `/api/book/unlove/${bookId}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                );
                setLoves(res.data.loves);
            }
            setLoved((l) => !l);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        setLoved(isLoved)
        //eslint-disable-next-line
    }, [isLoved]);

    return (
        <>
            {loved ? (
                <AiFillHeart className="text-2xl text-red-500" onClick={fetchLoves} />
            ) : (
                <AiOutlineHeart className="text-2xl" onClick={fetchLoves} />
            )}
            <p className="ml-3">Таалагдсан: {loves} </p>
        </>
    );
};

export default Love;
