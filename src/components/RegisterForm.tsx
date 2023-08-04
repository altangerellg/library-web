import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import IUser from "@library/types/IUser";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({ ...props }) => {
    const router = useRouter();
    const onSubmit = async (values: IUser) => {
        try {
            await axios.post("/api/user", values);
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    const form = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: "",
            gender: "M",
            birthDate: "",
        },
        validationSchema: yup.object({
            firstname: yup.string().required("Заавал оруулна уу"),
            lastname: yup.string().required("Заавал оруулна уу"),
            gender: yup.string().required("Хүйс сонгоно уу"),
            email: yup.string().email("Зөв и-мэйл оруулна уу").required("Заавал оруулна уу"),
            phone: yup
                .number()
                .min(10000000, "8 урттай байна")
                .max(99999999, "8 урттай байна")
                .required("Заавал оруулна уу"),
        }),
        onSubmit,
    });

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <p className="flex justify-center items-center font-bold text-3xl mt-6 text-black">
                Бүртгүүлэх
            </p>
        <form onSubmit={form.handleSubmit} className="flex flex-wrap w-full max-w-xl p-8">

            <Input
                disabled={form.isSubmitting}
                className="my-3 -mt-3"
                name="firstname"
                onChange={form.handleChange}
                placeholder="Овог"
                type="Firstname"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-3"
                name="lastname"
                onChange={form.handleChange}
                placeholder="Нэр"
                type="lastname"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-3"
                name="email"
                onChange={form.handleChange}
                placeholder="И-мэйл"
                type="email"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-3"
                name="password"
                onChange={form.handleChange}
                placeholder="Нууц үг"
                type="password"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-3"
                name="phone"
                onChange={form.handleChange}
                placeholder="Утасны дугаар"
                type="phone"
            />

            <div className="flex flex-wrap relative my-4 max-w-sm w-1/2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
                <input
                    type="date"
                    name="birthDate"
                    onChange={form.handleChange}
                    value={form.values.birthDate}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Төрсөн огноо"
                ></input>
            </div>
            <select
                className="ml-5 "
                name="gender"
                value={form.values.gender}
                placeholder="Хүйс"
                onChange={form.handleChange}
                disabled={form.isSubmitting}
            >
                <option value="M">Эр</option>
                <option value="F">Эм</option>
            </select>

            <Button loading={form.isSubmitting} type="submit" className="text-white">
                Бүртгүүлэх
            </Button>
            <p className="text-gray-400 text-sm mb-3 mt-3" >Нэвтрэх...</p>

        </form>
        </div>
    );
};
export default RegisterForm;
