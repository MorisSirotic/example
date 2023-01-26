import axios from "axios";

export const MyAxios = axios.create({
    baseURL: "https://api.storerestapi.com"
})