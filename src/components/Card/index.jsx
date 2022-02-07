import React from 'react';
import { CardWrapper } from './styles'


const Card = (props) => {
    return (
        <a href={props.link} rel="noopener noreferrer" target="_blank" style={{textDecoration: "none"}}>

        <CardWrapper>
            <img className="background" src={props.image} alt={props.title}/>
            <div className="cover"></div>
            <div className="cover-2"></div>
            <div className="Card">
                <div className="title">{props.title}</div>
                <div className="copy">{props.copy}</div>
                <div className="button">Go to site</div>
            </div>
        </CardWrapper>
        </a>

    )
}

export default Card;
