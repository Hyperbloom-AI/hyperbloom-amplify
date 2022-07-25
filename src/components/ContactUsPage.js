import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { useState } from 'react'


function ContactUs() {

	const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
	const [Subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")

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
								<input className='contact-us-inputs' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)}></input>
							</li>
							<li className='contact-us-li'>
								<input className='contact-us-inputs' placeholder='yourname@email.com' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
							</li>
							<li className='contact-us-li'>
								<input className='contact-us-inputs' placeholder='Email Subject' value={Subject} onChange={(e) => setSubject(e.target.value)}></input>
							</li>
							<li className='contact-us-li'>
								<textarea className='contact-us-inputs' placeholder='Email Message Here' value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
							</li>
						</ul>
						<img className='logo-adjust' src='img/hyperbloom-banner_white_on_black_small.png'></img>
					</body>
				</div>
			</div>

		</>
	);
}

export default ContactUs