import React from 'react';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import '../styles/BlogItem.css';

const BlogItem = (props) => {
	return (
		<div className="blog-item-container">
			<Grid container space={1} >

				<Grid item xs={12} sm={4} className="blog-item-container-left">
					<div className="blog-item-img-container">
						<img className="blog-item-img" src={props.img} />
					</div>
				</Grid>

				<Grid item xs={0} sm={1}></Grid>

				<Grid item xs={12} sm className="blog-item-container-right">
					<div className="blog-item-title">{props.title}</div>
					<br />
					<div className="blog-item-subtitle">{props.subTitle}</div>
					<br />
					<a href={props.link} target="_blank">
						<Button variant="contained" className="blog-item-link">
							<FontAwesomeIcon icon={faMedium} />
							<span>Read More</span>
						</Button>
					</a>
				</Grid>

			</Grid>

		</div>
	)
}

export default BlogItem;