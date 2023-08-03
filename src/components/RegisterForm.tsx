import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import IUser from "@library/types/IUser";

interface LoginFormProps {
    toggleSidebar: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ ...props }) => {
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
            lastname:"",
            email: "",
            password: "",
            phone:"",
            gender:"M",
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
        <form onSubmit={form.handleSubmit} className="w-full p-8">
            <Input
                disabled={form.isSubmitting}
                className="my-4"
                name="firstname"
                onChange={form.handleChange}
                placeholder="Овог"
                type="Firstname"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-4"
                name="lastname"
                onChange={form.handleChange}
                placeholder="Нэр"
                type="lastname"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-4"
                name="email"
                onChange={form.handleChange}
                placeholder="И-мэйл"
                type="email"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-4"
                name="email"
                onChange={form.handleChange}
                placeholder="И-мэйл"
                type="email"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-4"
                name="email"
                onChange={form.handleChange}
                placeholder="И-мэйл"
                type="email"
            />
            <Input
                disabled={form.isSubmitting}
                className="my-4"
                name="password"
                onChange={form.handleChange}
                placeholder="Нууц үг"
                type="password"
            />
            <p className="text-gray-500 text-sm mb-3 -mt-3">Бүртгүүлэх</p>
            <Button loading={form.isSubmitting} type="submit">
                Нэвтрэх
            </Button>
        </form>
    );
};
export default LoginForm;
