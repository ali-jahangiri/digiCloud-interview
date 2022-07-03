import { IResponseSchema } from "../types/apiResponseTypes";

const STATIC_ALPHABET_CHARACTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(el => el.toLowerCase());

function idGenerator() {
    return Date.now() * Math.random()
}

function separateBaseOnChar(list : IResponseSchema[] , baseOn : "last" | "first" = "last") {
    
    const charSeparatedWithOrder = STATIC_ALPHABET_CHARACTER.map(char => ({
        name : char,
        items : list
                .filter(el => el.name[baseOn][0].toLowerCase() === char)
                .map(el => ({ ...el , id : idGenerator() })) // !NOTE : overwrite default id property which receive from api response with new id to use in UI component as unique identifier
    }));

    
    return charSeparatedWithOrder;
}


export default separateBaseOnChar;