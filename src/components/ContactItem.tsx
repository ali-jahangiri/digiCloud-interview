import React from "react";
import { IResponseSchema } from "../utils/api";
import ContactCard from "./ContactCard";

interface Props extends IResponseSchema {
    onContactSelect : (cardName : number | null) => void;
    activeContactCard : null | number;
}

const ContactItem : React.FC<Props> = ({ name , id , onContactSelect , activeContactCard , ...rest }) => {
    
    return (
        <div className="contactItem">
            <div onClick={() => onContactSelect(id)} className="contactItem__fullName">
                <p>{name.first}, {name.last}</p>
            </div>

            {
                activeContactCard === id && <ContactCard onClose={() => onContactSelect(null)} name={name} {...rest} />
            }
        </div>
    )
}


export default ContactItem;