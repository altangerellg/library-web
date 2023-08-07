// import IAuthor from "@library/types/IAuthor";

export default interface ICategory {
    _id:string
    name: string;
    description: string;
    parent?: string;
    [key: string]: any;
}
