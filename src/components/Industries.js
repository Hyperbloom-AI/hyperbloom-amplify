import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Industries() {
	return (
		<>
			<div>
				<NavBar></NavBar>
			</div>
			<div className='page-content-container'>
				<h1 className='title-2'>Industries</h1>
				<div className='content-container'>
					<h1 className='title-3'>Healthcare and Life Sciences</h1>
					<section className='section-1'>
						<p className='whoweare-p'>
						We specialize in building and operating cloud data platforms for healthcare and life science companies. The work we do lays the foundation for data science research and intelligent software application development in problem domains such as mental health, brain science, and genomics. Our mission is to make the world’s health data useful so that people enjoy healthier lives.
						</p>
						<p className='services-p'>Our solutions help organizations:</p>
						<ul className='services-ul'>
							<li className='point-li'>Personalize healthcare by providing patients with access to the health data they need to get the right care at the right time</li>
							<li className='point-li'>Optimize operations by aggregating data across health IT systems and automating routine operations.</li>
							<li className='point-li'>Perform AI-powered data analysis that helps clinicians make diagnoses more quickly and accurately, getting patients on the right course of treatment faster.</li>
							<li className='point-li'>Identify regulatory risks and workflow inefficiencies across datasets.</li>
							<li className='point-li'>Predict future healthcare facility capacity.</li>
						</ul>
					</section>
					
				</div>
			</div>

		</>
	);
}

export default Industries