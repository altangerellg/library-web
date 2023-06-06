import IAuthor from "@library/types/IAuthor";

export default interface IBook {
    author?: IAuthor;
    isbn: string;
    publicationDate: string;
    [key: string]: any;
}
