import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function ContactUs() {
	return (
		<>
			<div>
				<NavBar></NavBar>
			</div>
			<div className='page-content-container'>
				<div className='contact-us-container'>
					<h1 className='contact-us-header'>Contact Us</h1>
					<body className='contact-us-body'>
						<ul className='contact-us-ul'>
							<li className='contact-us-li'>
								<input className='contact-us-inputs' placeholder='Name'></input>
							</li>
							<li className='contact-us-li'>
								<input className='contact-us-inputs' placeholder='username@email.com'></input>
							</li>
						</ul>
						<span>Hyperbloom</span>
					</body>
				</div>
			</div>

		</>
	);
}

export default ContactUs