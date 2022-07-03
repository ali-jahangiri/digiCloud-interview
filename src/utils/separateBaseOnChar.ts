import { IResponseSchema } from "./api";

const STATIC_ALPHABET_CHARACTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


function separateBaseOnChar(list : IResponseSchema[] , settleOn : "last" | "first" = "last") {
    
    const charSeparatedWithOrder = STATIC_ALPHABET_CHARACTER.map(char => ({
        name : char,
        items : list.filter(el => el.name[settleOn][0] === char)
    }));

    console.log(charSeparatedWithOrder);
    

    return charSeparatedWithOrder;
}


export default separateBaseOnChar;