import IAuthor from "@library/types/IAuthor";

export default interface IBook {
    author?: string;
    isbn: string;
    publicationDate: string;
    [key: string]: any;
}
