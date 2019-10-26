import React from 'react';
import { Grid, Button } from '@material-ui/core';
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
				<div><p className="portfilio-item-description">{props.description}</p></div>
				<div className="portfolio-item-btn-container">


					<a
						className="portfolio-item-btn-item"
						target="_blank"
						href={props.githubLink}>
						<Button variant="contained" className="portfolio-item-btn-btn">
							<FontAwesomeIcon icon={faGithub} />
							<span>GitHub</span>
						</Button>
					</a>

					{
						props.liveLink &&

						<a
							className="portfolio-item-btn-item"
							target="_blank"
							href={props.liveLink}>
							<Button variant="contained" className="portfolio-item-btn-btn">
								<FontAwesomeIcon icon={faLaptopCode} />
								<span>live!</span>
							</Button>
						</a>
					}
				</div>
			</div>
		</Grid>
	)
}

export default PortfolioItem;