import { useEffect, useState } from "react";
import api, { IResponseSchema } from "../utils/api";
import separateBaseOnChar from "../utils/separateBaseOnChar";
import LoadingSpinner from "./Loading";
import Tab from "./Tab";



type TReqKeys = "loading" | "data" | "error";

export interface IReqData {
    name : string;
    items : IResponseSchema[]
}

interface IReqState {
    loading : boolean;
    data : IReqData[];
    error : null | string;
}

const Container : React.FC = () => {
    const [request, setRequest] = useState<IReqState>({
        loading : true,
        data : [],
        error : null
    });


    function changeReqHandler(key : "loading" , value : boolean) : void;
    function changeReqHandler(key : "data" , value : IReqData[]) : void;
    function changeReqHandler(key : "error" , value : string) : void;
    function changeReqHandler<T>(key : TReqKeys , value : T) {
        setRequest(prev => ({
            ...prev,
            [key] : value
        }))
    }

    
    useEffect(() => {
        changeReqHandler("loading" , true);
        api()
            .then(peopleList => changeReqHandler("data", separateBaseOnChar(peopleList)))
            .catch(err => changeReqHandler("error" , err))
            .finally(() => changeReqHandler("loading" , false))
    } , []);


    return (
        <div className="container">
            {
                request.loading ? <LoadingSpinner /> : <>
                    <p className="container__title">Contact List</p>
                    <Tab items={request.data} />
                </>
            }
        </div>
    )
}


export default Container;