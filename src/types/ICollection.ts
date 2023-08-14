import IBook from "./IBook";
import IUser from "./IUser";

export default interface ICollection{
    name?:string;
    likes?:number;
    books?:Array<IBook>;
    date?: string;
    createdUser?:IUser;
    [key: string]: any;
}