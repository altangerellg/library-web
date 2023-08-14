import axios, { InternalAxiosRequestConfig } from "axios";

export default axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const tmp = localStorage.getItem("data");
    if (tmp) {
        const user = JSON.parse(tmp);
        config = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${user.token}`,
            },
        };
    }
    return config;
});
