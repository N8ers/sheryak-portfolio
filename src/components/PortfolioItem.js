import React from 'react';
import "../styles/PortfolioItem.css";

const PortfolioItem = (props) => {
    return (
        <div className="portfilio-item-container">
            <div>{props.title}</div>
            <div className="portfilio-item-img-container">
                <img className="portfilio-item-img" src={props.img} />
            </div>
            <div><p>{props.description}</p></div>
            <div className="portfolio-item-btn-container">
                <button><a target="_blank" href={props.githubLink}>GitHub</a></button>
                <button><a target="_blank" href={props.liveLink}>live!</a></button>
            </div>
        </div>
    )
}

export default PortfolioItem;