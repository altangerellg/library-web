// import IAuthor from "@library/types/IAuthor";

export default interface ICategory {
    name: string;
    description: string;
    parent?: string;
    [key: string]: any;
}
