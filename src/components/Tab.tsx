import React, { useState } from "react";
import ContactItem from "./ContactItem";
import { IReqData } from "./Container";
import EmptyTabContact from "./EmptyTabContact";
import TabBadge from "./TabBadge";


interface Props {
    items : IReqData[];
    isLoading : boolean;
}

const Tab : React.FC<Props> = ({ items , isLoading }) => {
    const [activeTabName, setActiveTabName] = useState<string>("A");

    const activeTabItems = items.find(tab => tab.name === activeTabName)

    if(isLoading) return <div>loading</div>
    return (
        <div className="tab">
            <div className="tab__badges">
                {
                    items.map((tab , i) => <TabBadge
                                                    isActive={activeTabName === tab.name}
                                                    onSelect={selectedChar => setActiveTabName(selectedChar)} 
                                                    key={i} 
                                                    {...tab}
                                                />)
                }
            </div>
            <div className="tab__itemContainer">
                {
                    Boolean(activeTabItems?.items.length) 
                    ? activeTabItems?.items.map((item , i) => <ContactItem key={i} {...item} />) 
                    : <EmptyTabContact />
                }
            </div>
        </div>
    )
}


export default Tab;