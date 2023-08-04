import IAuthor from "@library/types/IAuthor";

export default interface IBook {
    _id:string;
    author?: IAuthor;
    description?: string;
    isbn: string;
    publicationDate: string;
    [key: string]: any;
}
