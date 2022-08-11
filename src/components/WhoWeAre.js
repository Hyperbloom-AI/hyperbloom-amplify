import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faGithub, faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { link } from 'fontawesome'
import ScrollToTop from './ScrollToTop'

function WhoWeArePage() {
	return (
		<>
			<div className='page-content-container'>
				<h1 className='title-2'>Who We Are</h1>
				<div className='content-container'>
					<body className='consultant-body'>
					<section className='section-2'>
						<h1 className='title-3'>Our Principles</h1>
						<p className='whoweare-p'>Our company operates on principles that change over time as we learn more about ourselves and the world. Principles guide us towards living better lives and creating better lives for others. These principles are defined by our founding team and growing community of consultants, partners, and advisors. 
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
						<h1 className='title'>Our People</h1>
						<ul className='consultant-ul'>
							<li className='consultant-li'>
								<section className='consultant-images'>
									<img className='consultant-images-2' src='img/PaulPrae.png'></img>
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
									<img className='consultant-images-2' src='img/CalebLander.png'></img>
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
									<img className='consultant-images-2' src='img/AlexEversbusch.png'></img>
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
									<img className='consultant-images-2' src='img/PaulPrae.png'></img>
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
						<div>
							<section className='section-1'>
								<h1 className='title'>Our Social and Environmental Responsibilities</h1>
							</section>
							<section>
								<p className='whoweare-p'>
								Our people care about the planet and its future. We look for consulting projects that are out to address environmental issues in problem domains such as climate change, wildlife management, and biodiversity.
								</p>
								<p className='whoweare-p'>
								Wildlife management attempts to balance the requirements of wildlife with those of people using the best available science. It is vital to ensure wildlife populations and habitats endure over time, while also taking into account the aspirations and needs of people who rely on them. [2] According to the Convention on Biological Diversity:									
								</p>
								<ul className='bio-ul'>
									<li className='bio-li'>
									Sustainable wildlife management is the sound management of wildlife species to sustain their populations and habitat over time, considering the socioeconomic needs of human populations. 
									</li>
								</ul>
								
								<p className='whoweare-p'>
								Biodiversity is all the different kinds of life you’ll find in one area—the variety of animals, plants, fungi, and even microorganisms like bacteria that make up our natural world. Each of these species and organisms works together in ecosystems, like an intricate web, to maintain balance and support life. 
								</p>
								<ul className='bio-ul'>
									<li className='bio-li'>
										Biodiversity supports everything in nature that we need to survive: food, clean water, medicine, and shelter.
									</li>
								</ul>
								<p className='whoweare-p'>
								While Earth’s biodiversity is so rich that many species have yet to be discovered, many species are being threatened with extinction due to human activities, putting the Earth’s magnificent biodiversity at risk. 
								</p>
								<section className='cs-img-3'>
									<img className='cs-img-3'src='img/treeMonkey.png'></img>
								</section>
								<p className='whoweare-p'>
								All this pressure adds up to a landscape that is quickly changing, with nature struggling to keep up. For example, thirty percent of Borneo’s forests have been wiped out in only 40 years. We’ve lost half of all critically endangered Bornean orangutans in just the past 20 years. 
								</p>
								<section className='cs-img-3'>
									<img className='cs-img-3'src='img/orangatangs.png'></img>
								</section>
								<p className='whoweare-p'>
								But one of the most beautiful things about biodiversity is its resilience. Ease up on the pressure, manage resources well, give it time, and the ecosystem will adapt. Nature and biodiversity will recover. That’s exactly what we need to help other organizations do.
								</p>
								<ul className='bio-ul'>
									<li className='bio-li'>
									We need to analyze the unique threats to wildlife and biodiversity to then find innovative solutions. 
									</li>
								</ul>
								<p className='whoweare-p'>
								To protect the iconic wildlife we all love, we must rebuild the web of biodiversity that supports it. We do this by rethinking how we’re using natural resources, easing the pressure, and allowing ecosystems to recover. In the process, all life benefits: plants, insects, fish, birds, mammals, and even people.
								</p>
								<ul className='link-ul'>
									<a className='link-li' href="https://www.worldwildlife.org/pages/what-is-biodiversity"> 
										<li className='link-li'>
											https://www.worldwildlife.org/pages/what-is-biodiversity 
										</li>
									</a>
									<li className='link-li'>
										<a className='link-li' href="https://www.epicbiodiversity.com/wildlife-management"> https://www.epicbiodiversity.com/wildlife-management </a>
									</li>
									<li className='link-li'>
										<a className='link-li' href="https://www.coespu.org/index.php/articles/wildlife-management-and-biodiversity"> https://www.coespu.org/index.php/articles/wildlife-management-and-biodiversity </a>
									</li>
									<li className='link-li'>
										<a className='link-li' href="https://en.wikipedia.org/wiki/Wildlife_management"> https://en.wikipedia.org/wiki/Wildlife_management </a>
									</li>
									<li className='link-li'>
										<a className='link-li' href="https://www.nationalgeographic.org/encyclopedia/biodiversity/"> https://www.nationalgeographic.org/encyclopedia/biodiversity/ </a>
									</li>
									<li className='link-li'>
										<a className='link-li' href="https://www.amnh.org/research/center-for-biodiversity-conservation/what-is-biodiversity"> https://www.amnh.org/research/center-for-biodiversity-conservation/what-is-biodiversity </a>
									</li>
								</ul>
							</section>
						</div>	
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

export default WhoWeArePage
