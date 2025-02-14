import axios from "axios";

export const BASE_URL_API = "https://jigoindia.asrtechsolution.com/api";
export const IMAGE_URL = "https://jigoindia.asrtechsolution.com/";

export const instance = axios.create({
    baseURL: BASE_URL_API
})