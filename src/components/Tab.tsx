import React, { useState } from "react";

import ContactItem from "./ContactItem";
import EmptyTabContact from "./EmptyTabContact";
import TabBadge from "./TabBadge";

import { IReqData } from "../types/ContainerTypes";


interface Props {
    items : IReqData[];
}

const Tab : React.FC<Props> = ({ items }) => {
    const [activeTabName, setActiveTabName] = useState("a"); // default opened tab identifier
    const [activeContactCard, setActiveContactCard] = useState<null | number>(null);


    function onActiveTabChange(selectedChar : string) {
        setActiveTabName(selectedChar);
        // reset selected contact card
        setActiveContactCard(null);
    }
    
    const activeTabItems = items.find(tab => tab.name === activeTabName);
    
    return (
        <div className="tab">
            <div className="tab__badges">
                {
                    items.map((tab , i) => <TabBadge
                                                    isActive={activeTabName === tab.name}
                                                    onSelect={onActiveTabChange} 
                                                    key={i} 
                                                    {...tab}
                                                />)
                }
            </div>
            <div className="tab__itemContainer">
                {
                    Boolean(activeTabItems?.items.length) 
                    ? activeTabItems?.items.map((item , i) => <ContactItem 
                                                                onContactSelect={activeContactCardName => setActiveContactCard(activeContactCardName)} 
                                                                activeContactCard={activeContactCard} 
                                                                key={i} 
                                                                {...item}
                                                            />) 
                    : <EmptyTabContact />
                }
            </div>
        </div>
    )
}


export default Tab;