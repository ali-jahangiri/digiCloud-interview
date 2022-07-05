import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { IResponseSchema } from "../types/apiResponseTypes";

interface Props extends IResponseSchema {
    onContactSelect : (cardName : number | null) => void;
    activeContactCard : null | number;
}

const ContactItem : React.FC<Props> = ({ name , id , onContactSelect , activeContactCard , ...rest }) => {

    const containerRef = useRef<HTMLDivElement>(null)

    const isCurrentlyActive = activeContactCard === id;
    const closeContactCardHandler = () => onContactSelect(null);


    
    return (
        <div ref={containerRef} className="contactItem">
            <div onClick={() => onContactSelect(id)} className="contactItem__fullName">
                <p>{name.first}, {name.last}</p>
            </div>
            <div
                onClick={closeContactCardHandler}
                className={`contactItem__helperMobileDrawerOverlay ${isCurrentlyActive ? "contactItem__helperMobileDrawerOverlay--show" : ""}`}
            />
            {
                isCurrentlyActive && <ContactCard 
                                        triggerPosition={containerRef.current?.getClientRects()} 
                                        onClose={closeContactCardHandler} 
                                        name={name} 
                                        {...rest}
                                    />
            }
        </div>
    )
}


export default ContactItem;