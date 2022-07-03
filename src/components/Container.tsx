import { useEffect, useState } from "react";

import LoadingSpinner from "./Loading";
import SortBySwitcher from "./SortBySwitcher";
import Tab from "./Tab";

import api from "../utils/api";
import separateBaseOnChar from "../utils/separateBaseOnChar";

import { IResponseSchema } from "../types/apiResponseTypes";
import { IReqState, TReqKeys, TSortBase } from "../types/ContainerTypes";




const Container : React.FC = () => {
    const [request, setRequest] = useState<IReqState>({
        loading : true,
        data : [],
        error : null
    });

    const [sortBaseOn, setSortBaseOn] = useState<TSortBase>("last");


    // *optional function overload
    function changeReqHandler(key : "loading" , value : boolean) : void;
    function changeReqHandler(key : "data" , value : IResponseSchema[]) : void;
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
            .then(peopleList => changeReqHandler("data", peopleList))
            .catch(err => changeReqHandler("error" , err))
            .finally(() => changeReqHandler("loading" , false))
    } , []);

    
    return (
        <div className="container">
            {
                request.loading ? <LoadingSpinner /> : <>
                    <div className="container__header">
                        <p className="container__title">Contact List</p>
                        <SortBySwitcher sortBaseOn={sortBaseOn} setSortBaseOn={setSortBaseOn} />
                    </div>
                    <Tab items={separateBaseOnChar(request.data , sortBaseOn)} />
                </>
            }
        </div>
    )
}


export default Container;