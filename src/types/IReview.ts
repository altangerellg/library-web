import IBook from "./IBook";

export default interface IReview{
    user: any;
    reviewContent: string,
    date: string,
    book: IBook
}