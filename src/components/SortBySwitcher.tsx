import React from "react";
import { TSortBase } from "../types/ContainerTypes";

interface Props {
    sortBaseOn : TSortBase;
    setSortBaseOn : React.Dispatch<React.SetStateAction<TSortBase>>
}

const SortBySwitcher : React.FC<Props> = ({ sortBaseOn , setSortBaseOn }) => {

    function switchHandler() {
        setSortBaseOn(sortBaseOn === "first" ? "last" : "first")
    }

    return (
        <div className="sortBySwitcher">
            <p>Your contact list are sorted based on their {sortBaseOn} name alphabet. you can </p>
            <button onClick={switchHandler}>switch it</button>
        </div>
    )
}


export default SortBySwitcher;