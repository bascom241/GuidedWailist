import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://localhost:6000/api/v1/waitlist",
    withCredentials: true,
})