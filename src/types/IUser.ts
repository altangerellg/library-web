export default interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: "F" | "M";
    [key: string]: any;
}
