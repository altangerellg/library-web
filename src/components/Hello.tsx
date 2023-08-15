import useSession from "@library/hooks/useSession";
import Image from "next/image";
import React, {FC} from "react"

interface HelloProps{

}
const Hello: FC<HelloProps> = () =>{
    const {user} = useSession();
    return(
        <div className="flex items-center w-full py-5 border rounded-xl bg-gray-200 justify-between items-center px-20">
            <div className="flex justify-start items-center flex-wrap">
                <p className="flex text-xl font-bold w-full">
                    Hello {user?.lastname} {user?.firstname}!
                </p>
                <p className="w-full">Its good to see you again</p>
            </div>
            <div className="flex justify-center">
                {user?.gender ===  'M'? <Image
                alt="avatar"
                src="/avatarm.png"
                width={100}
                height={50}
                /> : <Image
                alt="avatar"
                src="/avatarfm.png"
                width={100}
                height={50}
                /> }
            </div>
        </div>
    )
}

export default Hello;