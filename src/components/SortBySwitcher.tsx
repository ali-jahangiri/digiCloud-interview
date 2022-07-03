import React from "react";


interface Props {
    sortBaseOn : "last" | "first";
    setSortBaseOn : React.Dispatch<React.SetStateAction<"last" | "first">>
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