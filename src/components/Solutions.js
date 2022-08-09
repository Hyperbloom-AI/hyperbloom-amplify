import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Solutions() {
	return (
		<>
			<div>
				<NavBar></NavBar>
			</div>
			<div className='page-content-container'>
				<h1 className='title-2'>Solutions</h1>
				<div className='content-container'>
					<section>
						<h1 className='title-4'>Reference Architectures</h1>
						<ul className='bio-ul'>
							<li className='bio-li'>
								Here are some common architectures we reference and further customize for our clients. We follow standard industry architectures whenever possible to make our software development processes more predictable and repeatable. This also makes our solutions easier to support once they are built. These solutions share best practice patterns often applied by engineers and architects across many industries.
							</li>
						</ul>
						<h1 className='title-2'>Data Lake</h1>
						<p className='whoweare-p'>
							A scalable data lake architecture provides your organization with a solid foundation to gain value from your data lake while bringing more data into it. By continuously gaining data insights without being slowed down or interrupted because of scalability constraints, a scalable data lake also helps your organization remain competitive.
						</p>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/datalakes.png'></img>
						</section>
						<p className='whoweare-p'>
							Typically, a data lake has data producers and data consumers. Data producers create data assets by collecting, processing, and storing data from their data domain. These collective data assets form the content of your data lake. Data producers can choose to selectively share their data assets with the data lake's data consumers.
						</p>
						<p className='whoweare-p'>
							Data consumers need the data from the data producers to fulfill their business use cases and can also occasionally combine this data with their own data. Data producers and data consumers are typically, but not always, part of your organization. Importantly, they can both be data producers or data consumers at the same time.
						</p>
						<p className='services-p'>
							A scalable data lake architecture helps you to achieve the following outcomes:
						</p>
						<ul className='services-ul'>
							<li className='point-li'>Onboard data producers at scale without requiring them to maintain the entire data sharing process. This helps data producers onboard their data into the data lake and focus on collecting, processing, and storing data from their data domain.</li>
							<li className='point-li'>Enable data consumers to access data from multiple data producers without increasing your overall costs and management overhead.</li>
						</ul>
						<ul className='services-ul'>
							<li className='link-li'>
								<a className='link-li' href="https://docs.aws.amazon.com/solutions/latest/data-lake-solution/architecture.html"> https://docs.aws.amazon.com/solutions/latest/data-lake-solution/architecture.html </a>
							</li>
						</ul>
						<h1 className='title'>Health Data Lake</h1>
						<p className='whoweare-p'>
							Amazon HealthLake is a HIPAA-eligible service offering healthcare and life sciences companies a complete view of individual or patient population health data for query and analytics at scale.
						</p>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/healthdatalakes.png'></img>
						</section>
						<p className='services-p'>
							This solution helps your organization:
						</p>
						<ul className='services-ul'>
							<li className='point-li'>Extract meaning from unstructured data with natural language processing (NLP) for easy search and querying.</li>
							<li className='point-li'>Make predictions with health data using Amazon SageMaker machine learning (ML) models and Amazon QuickSight analytics.</li>
							<li className='point-li'>Support interoperable standards such as the Fast Healthcare Interoperability Resources (FHIR) format.</li>
							<li className='point-li'>Create a complete and chronological view of patient health data, including prescriptions, procedures, and diagnoses.</li>
						</ul>
						<ul className='services-ul'>
							<li className='link-li'>
								<a className='link-li' href="https://aws.amazon.com/healthlake/">https://aws.amazon.com/healthlake/</a>
							</li>
						</ul>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/healthdatalakes.jpeg'></img>
						</section>
						<h1 className='title'>Data Lake House</h1>
						<p className='whoweare-p'> 
							As a modern data architecture, the Lake House approach is not just about integrating your data lake and your data warehouse, but it’s about connecting your data lake, your data warehouse, and all your other purpose-built services into a coherent whole. The data lake allows you 
							to have a single place you can run analytics across most of your data while the purpose-built analytics services provide the speed you need for specific use cases like real-time dashboards and log analytics.
						</p>
						<p className='services-p'>
							This Lake House approach consists of the following key elements:
						</p>
						<ul className='services-ul'>
							<li className='point-li'>Scalable Data Lakes</li>
							<li className='point-li'>Purpose-built Data Services</li>
							<li className='point-li'>Seamless Data Movement</li>
							<li className='point-li'>Unified Governance</li>
							<li className='point-li'>Performant and Cost-effective Patterns and Processes</li>
						</ul>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/datalakehouse.png'></img>
						</section>
						<p className='whoweare-p'>
							A layered data analytics architecture enables you to use the right tool for the right job. You gain the flexibility to evolve your Lake House to meet current and future needs as you add new data sources, discover new use cases, and develop new analytics methods.
						</p>
						<p className='whoweare-p'>
							For this Lake House Architecture, you can organize it as a stack of five logical layers, where each layer is composed of multiple purpose-built components that address specific requirements. We can customize this stack for your needs.
						</p>
						<section className='cs-img-2'>
							<img className='cs-img-2'src='img/datalakehouse2.png'></img>
						</section>
						<ul className='services-ul'>
							<li className='link-li'>
								<a className='link-li' href="https://aws.amazon.com/blogs/big-data/build-a-lake-house-architecture-on-aws/">https://aws.amazon.com/blogs/big-data/build-a-lake-house-architecture-on-aws/</a>
							</li>
						</ul>
						<h1 className='title-5'>Demos</h1>
						<h1 className='title'>Neona: A Chatbot for Learning AI</h1>
						<ul className='bio-ul'>
							<li className='bio-li'>
								By interacting with her, you can explore concepts from across the field of artificial intelligence. By studying her design and architecture, you can learn how to build conversational agents.
							</li>
						</ul>
						<section className='cs-img-2'>
							<img className='cs-img-2'src='img/Neonademo.png'></img>
						</section>
						<p className='whoweare-p'>
							There are two primary systems that compose the agent. The first is a knowledge system composed of subsystems that acquire, store, and retrieve knowledge. The second is the conversational system that allows the agent to interact with people and reason over its knowledge. There are two technologies that these systems share that allowed the agent to remain cohesive: Microsoft Azure, an “open, flexible, enterprise-grade cloud computing platform”, and Node.js, an “event-driven I/O server-side JavaScript environment”. These were chosen because of the potential of the Microsoft Bot Framework, which was the cornerstone of this architecture.
						</p>
						<ul className='services-ul'>
							<li className='link-li'>
								<a className='link-li' href="https://www.neona.chat">https://www.neona.chat</a>
							</li>
						</ul>
						<h1 className='title'>Predictive Analytics Workshop</h1>
						<p className='whoweare-p'>
							Using real-world data from www.healthdata.gov, we built and demonstrated an experiment that predicts the outcomes of patients who went through substance abuse treatment.
						</p>
						<ul className='services-ul'>
							<li className='link-li'>
								<a className='link-li' href="https://www.paulprae.com/predicting-the-future-with-azure-machine-learning/">https://www.paulprae.com/predicting-the-future-with-azure-machine-learning/</a>
							</li>
						</ul>
					</section>
				</div>
			</div>		

		</>
	);
}

export default Solutions