import React from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../styles/ContactPage.css";

const ContactPage = () => {
	return (
		<div className="contact-container">
			<h1 className="contact-header">Hi, I'm Nathan </h1>
			<hr />

			<div className="contact-p">
				<p>I'm a Software Developer.</p>
				<p>I make websites, apps, and APIs. In my spare time I program hardware, build DIY electronics, write blog posts, and play music.</p>
				<p>Feel free to connect on LinkedIn or check out some code on GitHub.</p>
			</div>

			<div className="social-icon-container">

				<a href="https://github.com/N8ers"
					target="_blank"
					className="social-icon">
					<Button variant="contained">
						<FontAwesomeIcon size="2x" icon={faGithub} />
					</Button>
				</a>

				<a href="https://www.linkedin.com/in/nathan-sheryak/"
					target="_blank"
					className="social-icon">
					<Button variant="contained">
						<FontAwesomeIcon size="2x" icon={faLinkedin} />
					</Button>
				</a>

			</div>
			<br />

		</div >
	)
}

export default ContactPage;