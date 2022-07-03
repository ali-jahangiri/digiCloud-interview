import { IResponseSchema } from "./apiResponseTypes";

export type TReqKeys = "loading" | "data" | "error";

export type TSortBase = "first" | "last";

export interface IReqData {
    name : string;
    items : IResponseSchema[]
}

export interface IReqState {
    loading : boolean;
    data : IResponseSchema[];
    error : null | string;
}