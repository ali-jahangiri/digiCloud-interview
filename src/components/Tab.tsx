import React from "react";
import { IReqData } from "./Container";
import TabItem from "./TabItem";


interface Props {
    items : IReqData[];
    isLoading : boolean;
}

const Tab : React.FC<Props> = ({ items , isLoading }) => {

    return (
        <div>
            {
                isLoading ? "loading" : items.map((tab , i) => <TabItem key={i} {...tab} />)
            }
        </div>
    )
}


export default Tab;