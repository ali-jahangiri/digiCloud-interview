import React from "react";
import { IResponseSchema } from "../utils/api";

interface Props extends IResponseSchema {}

const ContactItem : React.FC<Props> = ({ name }) => {
    


    return (
        <div className="contactItem">
            <div className="contactItem__fullName">
                <p>{name.first}, {name.last}</p>
            </div>
        </div>
    )
}


export default ContactItem;