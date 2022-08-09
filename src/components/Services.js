import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Services() {
	return (
		<>
			<div>
				<NavBar></NavBar>
			</div>
			<div className='page-content-container'>
				<h1 className='title-2'>Services</h1>
				<div className='content-container'>
					<section>
					<h1 className='title-3'>DataOps</h1>
					<p className='whoweare-p'>
					Our core competency is in data operations, also known as "DataOps". We provide consulting services that support every stage of the data science lifecycle. 
					</p>
					<section className='cs-img-2'>
							<img className='cs-img-2'src='img/dataops.png'></img>
					</section>
					<ul className='customer-ul'>
						<li className='link-li'>
							<a className='link-li' href="https://www.datascience-pm.com/crisp-dm-2/"> https://www.epicbiodiversity.com/wildlife-management </a>
						</li>
					</ul>
					<p className='whoweare-p'>We can build end-to-end data science systems or augment your teams where you need the most help.</p>
					<p className='services-p'>Our solutions:</p>
					<ul className='services-ul'>
						<li className='point-li'>Increase the liquidity and accessibility of your data.</li>
						<li className='point-li'>Improve the quality and security of your data. </li>
						<li className='point-li'>Provide real-time insights to your IT teams.</li>
					</ul>
					<h3 className='title'>MLOps</h3>
					<p className='whoweare-p'>Our work in DataOps lays the groundwork for machine learning operations, also known as "MLOps". We provide consulting services to support each step of your machine learning workflow. Our machine learning engineers build, test, deploy, and manage machine learning models.</p>
					<h4 className='title'>CloudOps</h4>
					<p className='whoweare-p'> Our preferred data and machine learning infrastructure lives in the cloud. We specialize in data, machine learning, and AI web services provided by Amazon Web Services, Microsoft Azure, and the Google Cloud Platform.</p>
					<h5 className='title'>Full-Stack AI Application Development </h5>
					<p className='services-p'>We architect and build intelligent, secure, performant, and scalable web applications, allowing end users and employees to accomplish their goals quickly and easily.</p>
					<p className='services-p'>Our solutions include:</p>
					<ul className='services-ul'>
						<li className='point-li'>Cognitive assistants for automating customer engagement.</li>
						<li className='point-li'>Recommendation systems for personalizing experiences.</li>
						<li className='point-li'>Forecasting to help our clients make better decisions.</li>
					</ul>
					</section>
				</div>
			</div>			

		</>
	);
}

export default Services