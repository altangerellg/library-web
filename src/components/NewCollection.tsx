import ICollection from "@library/types/ICollection";
import {FC,MouseEventHandler,useState} from "react"
import axios from "axios";
import useSession from "@library/hooks/useSession";
interface NewCollectionProps{
    onHide: MouseEventHandler<HTMLDivElement>;
    toggleNewCollection: ()=>void;
}
 
const NewCollection: FC<NewCollectionProps> = ({onHide, toggleNewCollection}) => {
    const [collectionName,setCollectionName] = useState<string>()
    const {user} = useSession();
    const onChangeName = (e:any) => {
        setCollectionName(e.target.value);
    }

    const onSubmitCollection = async(e:any) => {
        e.preventDefault();
        try{
            const values = {
                name:collectionName
            }
            const res = await axios.post("/api/collection",values,
            )
            toggleNewCollection();
        }
        catch(err){
            console.log(err)
        }
    }
    return ( 
        <div onClick={onHide} id="modal-backdrop" className="fixed top-0 left-0 w-screen h-screen z-30 flex justify-center items-center bg-black/70">
            <div className="flex bg-white py-10 px-10 border-slate-700 rounded-md w-1/3">
                <form className="flex flex-col w-full" onSubmit={onSubmitCollection}>
                    <label htmlFor="name" className="font-semibold">Цуглуулганы нэр:</label>
                    <input name="name" type="text" value={collectionName} onChange={onChangeName} className="py-3 px-5 mt-3 border-2 rounded-md w-full"></input>
                    <button type="submit" className="mt-3 py-2 px-5 bg-main text-white">Үүсгэх</button>
                </form>
            </div>
        </div> 
    );
}
 
export default NewCollection;