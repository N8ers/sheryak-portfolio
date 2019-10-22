import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "../styles/ContactPage.css";

const ContactPage = () => {
	return (
		<div className="contact-container">
			<h1>Nathan Sheryak</h1>
			<h3>Software Developer</h3>
			<hr />

			<span>
				<a><FontAwesomeIcon icon={faGithub} /></a>
				<a><FontAwesomeIcon icon={faGithub} /></a>
				<a><FontAwesomeIcon icon={faGithub} /></a>
			</span>

			<p>I'm a web developer with a background in music media production. I make websites, and applications that focus on user interfaces that have intuitive and beautiful design. In my spare time I program hardware, build DIY electronics, write blog posts, and play music. If you want to reach out please do at, Nathan Sheryak.</p>

		</div>
	)
}

export default ContactPage;