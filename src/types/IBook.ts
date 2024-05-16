// import IAuthor from "@library/types/IAuthor";

export default interface IBook {
    _id:string;
    author?: string;
    description?: string;
    isbn: string;
    publicationDate: string;
    loves:number,
    lovedUsers:Array<string>,
    [key: string]: any;
}
