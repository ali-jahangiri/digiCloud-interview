import { IResponseSchema } from "../types/apiResponseTypes";

const BASE_URL = "https://randomuser.me/";



function api() {
    return fetch(`${BASE_URL}api/?results=100&seed=abc`)
        .then(res => res.json())
        .then(data => data.results as IResponseSchema[])
}


export default api;