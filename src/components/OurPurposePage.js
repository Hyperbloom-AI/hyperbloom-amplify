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
				<div className='content-container'>
					<h1 className='title'>Our Purpose</h1>
					<section className='section-1'>
						<p className='our-purpose-p'>
						Hyperbloom is a collective of consultants that team up to build data-driven systems to improve life on our planet. We provide technical consulting services at the intersection of our three practice areas: *data science, software engineering, and creative computing*. We target and serve many industries. Our current customer accounts include healthcare, life sciences, education, financial services, digital marketing, art, and entertainment.
						Hyperbloom follows a bottom-up leadership approach, trusting and supporting [our talent](https://www.notion.so/6a0a6df2dbdf4085b9684e14fa482dea) as they deliver [a variety of solutions across a variety of problem domains](https://www.notion.so/Hyperbloom-s-Knowledge-Graph-f3a68e5778bd4c6992825636c5954ffa). Because of this bottom-up approach, our consulting services and target industries are as diverse as our talent. 
						For example, the data science practice delivers consulting services analogous to each step in the data science process. Our data science and engineering consultants specialize in building enterprise-ready, cloud-based data science platforms that are foundational to artificial intelligence, machine learning, and natural language processing systems. Since we most often work on the data collection, data preparation, model deployment, and application integration stages of the data science lifecycle, we often describe our focus areas as CloudOps (Cloud Operations), DataOps (Data Operations), and MLOps (Machine Learning Operations).
						</p>
					</section>
					<section className='section-2'>
						<h1 className='title'>Our Principles</h1>
						<p className='our-purpose-p'>Our company operates on principles that change over time as we learn more about ourselves and the world. *Principles guide us towards living better lives and creating better lives for others*. These principles are defined by our founding team and growing community of consultants, partners, and advisors. 
						</p>
						<ul className='our-purpose-ul'>
							<li className='our-purpose-li'>
								Dream Big
							</li>
							<li className='our-purpose-li'>
								Get creative
							</li>
							<li className='our-purpose-li'>
								Follow the data
							</li>
							<li className='our-purpose-li'>
								Optimize for the whole
							</li>
							<li className='our-purpose-li'>
								Take ownership
							</li>
							<li className='our-purpose-li'>
								Be brave
							</li>
							<li className='our-purpose-li'>
								Support the success of others
							</li>
							<li className='our-purpose-li'>
								Stay focused
							</li>
							<li className='our-purpose-li'>
								Practice radical transparency
							</li>
							<li className='our-purpose-li'>
								Fight bias
							</li>
						</ul>
					</section>
				</div>
			</div>

		</>
	);
}

export default Industries