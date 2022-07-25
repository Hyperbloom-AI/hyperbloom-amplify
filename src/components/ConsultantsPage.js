import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { faGithub, faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Consultants() {
	return (
		<>
			<div>
				<NavBar></NavBar>
			</div>
			<div className='page-content-container'>
				<div className='consultant-page-container'>
					<body className='consultant-body'>
						<ul className='consultant-ul'>
							<li className='consultant-li'>
								<section className='consultant-images'>
									<img className='site-logo' src='img/hyperbloom-banner_black_on_white_small.png'></img>
								</section>
								<section className='consultant-name'>
									<span>Paul Prae</span>
								</section>
								<section>
									<p className='consultant-bios'>Paul advises executives on data science strategy and leads data engineering teams in the healthcare and life sciences industries. His technical specialty is in cloud operations working as a data platform architect. He spent the past 15 years working at AWS, Microsoft, Red Ventures, and Slalom Consulting delivering enterprise software solutions to Fortune 500 companies. Today, he runs Hyperbloom and is a resident cloud architect at the Center for Translational Research in Neuroimaging and Data Science. </p>
								</section>							
								<div className='social__wrapper'>
              					<a href="https://github.com/Hyperbloom-AI" target="_blank">
                					<FontAwesomeIcon icon={faGithub} size="2x" /> 
              					</a>
								<a href="https://www.linkedin.com/company/75001552" target="_blank">
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
								<a href="https://twitter.com/hyperbloomAI" target="_blank">
									<FontAwesomeIcon icon={faTwitter} size="2x" />
								</a>
								<a href="mailto:team@hyperbloom.ai" target="_blank">
									<FontAwesomeIcon icon={faEnvelope} size="2x" />
								</a>
								</div>
							</li>

							<li className='consultant-li'>
								<section className='consultant-images'>
									<img className='site-logo' src='img/hyperbloom-banner_black_on_white_small.png'></img>
								</section>
								<section className='consultant-name'>
									<span>Caleb Lander</span>
								</section>
								<section className='consultant-bios'>
									<span>Caleb Lander works in the Hyperbloom data science practice as an operations lead.  His focuses are in DataOps and DevOps on AWS.  He is highly interested in both computer and life sciences and has been thrilled to be working on projects where the two overlap. </span>
								</section>
								<div className='social__wrapper'>
              					<a href="https://github.com/Hyperbloom-AI" target="_blank">
                					<FontAwesomeIcon icon={faGithub} size="2x" /> 
              					</a>
								<a href="https://www.linkedin.com/company/75001552" target="_blank">
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
								<a href="https://twitter.com/hyperbloomAI" target="_blank">
									<FontAwesomeIcon icon={faTwitter} size="2x" />
								</a>
								<a href="mailto:team@hyperbloom.ai" target="_blank">
									<FontAwesomeIcon icon={faEnvelope} size="2x" />
								</a>
								</div>
							</li>
							<li className='consultant-li'>
								<section className='consultant-images'>
									<img className='site-logo' src='img/hyperbloom-banner_black_on_white_small.png'></img>
								</section>
								<section className='consultant-name'>
									<span>Alex Eversbusch</span>
								</section>
								<section className='consultant-bios'>
									<span>Alex is a full stack engineer with almost five years of experience building and maintaining software, and over a decade of experience as a designer. He comes from a background of Landscape Architecture, Engineering, and Music, and made a career change about 5 years ago when he realized software was the best way for him to realize his full potential as a designer and engineer. </span>
								</section>
								<div className='social__wrapper'>
              					<a href="https://github.com/Hyperbloom-AI" target="_blank">
                					<FontAwesomeIcon icon={faGithub} size="2x" /> 
              					</a>
								<a href="https://www.linkedin.com/company/75001552" target="_blank">
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
								<a href="https://twitter.com/hyperbloomAI" target="_blank">
									<FontAwesomeIcon icon={faTwitter} size="2x" />
								</a>
								<a href="mailto:team@hyperbloom.ai" target="_blank">
									<FontAwesomeIcon icon={faEnvelope} size="2x" />
								</a>
								</div>
							</li>
							<li className='consultant-li'>
								<section className='consultant-images'>
									<img className='site-logo' src='img/hyperbloom-banner_black_on_white_small.png'></img>
								</section>
								<section className='consultant-name'>
									<span>Paul Prae</span>
								</section>
								<section className='consultant-bios'>
									<span>Paul advises executives on data science strategy and leads data engineering teams in the healthcare and life sciences industries. His technical specialty is in cloud operations working as a data platform architect. He spent the past 15 years working at AWS, Microsoft, Red Ventures, and Slalom Consulting delivering enterprise software solutions to Fortune 500 companies. Today, he runs Hyperbloom and is a resident cloud architect at the Center for Translational Research in Neuroimaging and Data Science. </span>
								</section>
								<div className='social__wrapper'>
              					<a href="https://github.com/Hyperbloom-AI" target="_blank">
                					<FontAwesomeIcon icon={faGithub} size="2x" /> 
              					</a>
								<a href="https://www.linkedin.com/company/75001552" target="_blank">
									<FontAwesomeIcon icon={faLinkedin} size="2x" />
								</a>
								<a href="https://twitter.com/hyperbloomAI" target="_blank">
									<FontAwesomeIcon icon={faTwitter} size="2x" />
								</a>
								<a href="mailto:team@hyperbloom.ai" target="_blank">
									<FontAwesomeIcon icon={faEnvelope} size="2x" />
								</a>
								</div>
							</li>
						</ul>	
					</body>
				</div>
			</div>

		</>
	);
}


/*<table className='table'>
							<tr>
								<th>Consultants</th>
								<th>Image</th>
								<th>Bio</th>
							</tr>
							<tr>
								<td>Paul Prae</td>
								<td><img className='site-logo' src='img/hyperbloom-banner_black_on_white_small.png'></img></td>
								<td>kjbvaijonfjnvskbvljkvdbwqhviuwqbvoibvobaclkjsbdjbwuebnjiefbvwiuyoefhvgheiourhqviobvqhjvbqhoibvdksljabviquwhvuiqphvwhvoqhvqiebhfjsovhgqiwuehvcqpwcbhd</td>
							</tr>
						</table>*/

export default Consultants
