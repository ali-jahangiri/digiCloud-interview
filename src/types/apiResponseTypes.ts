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