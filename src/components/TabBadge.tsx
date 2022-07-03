import { IReqData } from "./Container";

interface Props extends IReqData {
    onSelect : (charName : string) => void;
    isActive : boolean;
}

const TabBadge : React.FC<Props> = ({ name , items , isActive , onSelect }) => {
    return (
        <div 
            className={`tabBadge ${isActive ? "tabBadge--active" : ""} ${!items.length ? "tabBadge--empty" : ""}`}
            onClick={() => onSelect(name)} 
        >
            <p>{name}</p>
            <span>{items.length}</span>
        </div>
    )
}


export default TabBadge;