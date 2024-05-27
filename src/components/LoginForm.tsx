import ILogin from "@library/types/ILogin";
import { useFormik } from "formik";
import React, { FC, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import useSession from "@library/hooks/useSession";
import RegisterForm from "./RegisterForm";

interface LoginFormProps {
    toggleSidebar: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ toggleSidebar, ...props }) => {
    const router = useRouter();
    const { setUser } = useSession();
    const onSubmit = async (values: ILogin) => {
        try {
            const response = await axios.post("/api/user/login", values);
            localStorage.setItem("data", JSON.stringify(response.data));
            setUser(response.data);
            toggleSidebar();
        } catch (error) {
            console.log(error);
        }
    };

    const form = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("Зөв и-мэйл оруулна уу").required("Заавал и-мэйлээ оруулна уу"),
            password: yup
                .string()
                .min(8, "Хамгийн багадаа 8 тэмдэгт оруулна уу")
                .required("Заавал нууц үгээ оруулна уу"),
        }),
        onSubmit,
    });

    useEffect(() => {}, [router]);
    return (
        <form onSubmit={form.handleSubmit} className="w-full p-8">
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
            <button>
            <p className="text-gray-500 text-sm mb-3 -mt-3">Бүртгүүлэх</p>
            </button>
            {/* <RegisterForm/> */}
            <Button loading={form.isSubmitting} type="submit">
                Нэвтрэх
            </Button>      
        </form>
    );
};
export default LoginForm;
