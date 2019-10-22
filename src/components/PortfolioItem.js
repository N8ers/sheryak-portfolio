import React from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "../styles/PortfolioItem.css";

const PortfolioItem = (props) => {
	return (
		<Grid item lg={4} md={4} sm={6} xs={12}>
			<div className="portfilio-item-container">
				<div className="portfilio-item-title">{props.title}</div>
				<div className="portfilio-item-img-container">
					<img className="portfilio-item-img" src={props.img} />
				</div>
				<div><p>{props.description}</p></div>
				<div className="portfolio-item-btn-container">
					<button className="portfolio-item-btn-item">
						<FontAwesomeIcon icon={faGithub} />
						<a target="_blank" href={props.githubLink}>GitHub</a>
					</button>
					{
						props.liveLink && <button className="portfolio-item-btn-item">
							<FontAwesomeIcon icon={faLaptopCode} />
							<a target="_blank" href={props.liveLink}>live!</a>
						</button>
					}
				</div>
			</div>
		</Grid>
	)
}

export default PortfolioItem;