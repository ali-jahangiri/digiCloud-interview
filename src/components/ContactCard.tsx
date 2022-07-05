import React from "react";
import useCrossoverViewportDetection from "../hooks/useCrossoverViewportDetection";
import { IResponseSchema } from "../types/apiResponseTypes";

interface Props extends Omit<IResponseSchema ,"id">  {
    onClose : () => void
    triggerPosition : DOMRectList | undefined;
}

const ContactCard : React.FC<Props> = ({ name ,  picture , phone , email , location , login , triggerPosition , onClose }) => {
    
    const STATIC_CARD_WIDTH = 640;

    const leftPosition = useCrossoverViewportDetection({
        baseElementXPosition : triggerPosition ? triggerPosition[0].x : 0,
        targetElementWidth : STATIC_CARD_WIDTH
    })
    
    const detailsListMapper = [
        {
            name : "e-mail",
            value : email
        },
        {
            name : "phone",
            value : phone
        },
        {
            name : "street",
            value : location.state
        },
        {
            name : "city",
            value : location.city
        },
        {
            name : "state",
            value : location.state
        },
        {
            name : "postcode",
            value : location.postcode
        },
    ]

    return (
        <div style={{ left : leftPosition }} className="contactCard">
            <div className="contactCard__img">
                <img src={picture.medium} alt="contact-pic" />
            </div>
            <p className="contactCard__userName">USERNAME {login.username}</p>
            <div className="contactCard__details">
                <p className="contactCard__details__name">{name.first}, {name.last}</p>
                <div className="contactCard__details__innerContainer"> 
                    <div className="contactCard__details__labels">
                        {
                            detailsListMapper.map((el , i) => (
                                <div key={i}>
                                    <p>{el.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="contactCard__details__values">
                        {
                            detailsListMapper.map((el , i) => (
                                <div key={i}>
                                    <p>{el.value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div onClick={onClose} className="contactCard__closeTrigger">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
            </div>
        </div>
    )
}


export default ContactCard;