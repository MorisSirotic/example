import axios from "axios";

export const MyAxios = axios.create({
    baseURL: "https://fakestoreapi.com"
})