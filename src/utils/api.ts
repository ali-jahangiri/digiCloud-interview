const BASE_URL = "https://randomuser.me/";

export interface IResponseSchema {
    phone : string;
    email : string;
    id : number;
    name : {
        first : string;
        last : string;
    }
    picture : {
        medium : string;
    }
    location : {
        state : string;
        postcode : string;
        city : string;
        street : {
            name : string;
        }
    }
    login : {
        username : string;
    }
}

function api() {
    return fetch(`${BASE_URL}api/?results=100&seed=abc`)
        .then(res => res.json())
        .then(data => data.results as IResponseSchema[])
}


export default api;