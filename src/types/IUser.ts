export default interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: "F" | "M";
    birthDate: string;
    [key: string]: any;
}
