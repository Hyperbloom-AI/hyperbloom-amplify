import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function CustomerStories() {
	return (
		<>
			<div className='page-content-container'>
				<h1 className='title-2'>Customer Stories</h1>
				<div className='content-container'>
					<h1 className='title-3'>COINSTAC: Neuroinformatics Data Platform</h1>
					<section className='section-1'>
						<section className='cs-img'>
							<img className='cs-img'src='img/COINSTACarchitecture.png'></img>
						</section>
						<ul className='customer-ul'>
							<li className='bio-li'>
								COINSTAC is an open-source software suite that fosters collaborative research using neuroimaging and genomics data. 
							</li>
						</ul>
						
						<p className='whoweare-p'>
						
						COINSTAC is an open-source software suite that fosters collaborative research using neuroimaging and genomics data. 
						Our data practitioners are actively contributing to various aspects of the platform with a focus on cloud computing and DevOps activities. 
						</p>
						<p className='whoweare-p'>COINSTAC removes large barriers to traditional data-centric collaboration approaches. It enables groups of users to run common analyses on their own machines over their own datasets with ease. The results of these analyses are synchronized to the cloud, and undergo aggregate analysis processes using all contributor data. Decentralized pipelines allow for distributed, iterative, and feature-rich analyses to be run, opening new and exciting capabilities for collaborative computation. It also offers data anonymity through differential privacy algorithms, so members do not need to fear PHI traceback.</p>
						<h1 className='title'>NeuroLex: Voice Computing for Healthcare</h1>
						<section className='cs-img-2'>
							<img className='cs-img-2'src='img/NeuroLex.png'></img>
						</section>
						<ul className='customer-ul'>
							<li className='bio-li'>
							A portfolio of voice technologies to power the future of healthcare
							</li>
						</ul>
						<p className='whoweare-p'>
							We architected and developed multiple software applications, web services, and data pipelines for NeuroLex. We supported their mission to make voice computing accessible to everyone. The automated machine learning workflows we built collected data, cleaned data, trained models, and deployed models.
						</p>
						
						<h1 className='title'>Genomics Data Platform</h1>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/Genomics.png'></img>
						</section>
						<ul className='customer-ul'>
							<li className='bio-li'>
							We helped a leader in rare diseases and genetic medicines migrate their high-performance computing (HPC) cluster and data platform from an on-premises environment to the cloud. 
							</li>
						</ul>
						<p className='whoweare-p'>
							Data was being stored locally on SAN disks and analytics were performed via Jupyter Hub hosted on their over-utilized HPCs. We wrote and deployed a software agent to their HPC cluster to act as a file gateway, allowing them to essentially mount a file storage system with low latency access to their newly created S3 buckets. Since the amount of data they had to move at the start was not too large, they requested for us to implement a site-to-site VPN for data transfer to save costs. We used AWS Glue to transform the data into a columnar format, Parquet, as it was optimized for the type of queries they planned to execute. 
						</p>
						<p className='whoweare-p'>
						To save both time and money, a transformation has to occur when the technician queries the data. To facilitate this, when a query runs, a CloudWatch event is fired that causes AWS Glue to transform the VCF files into Parquet and save them into another S3 bucket in their Data Lake. The AWS Glue Data Catalog is then updated to reflect these changes. 
						</p>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/Genomics2.png'></img>
						</section>
						<p className='whoweare-p'>
						Overall, we successfully implemented a production-ready start to their data lake and automated several tasks for their data engineers.
						</p>
						<h1 className='title'>Decooda: Knowledge Transfer Module</h1>
						<p className='whoweare-p'>We designed, architected, and developed a system that creates high-quality training data at enterprise scale. It helps train, test, and tune machine learning algorithms for everything from search relevance and sentiment analysis to conversational agents. By annotating data with this system, business analysts were able to contribute to our knowledge base and improve the quality of predictions made by Decooda’s machine learning classifiers. The application was built with React, Express, and Node.js.</p>
						<section className='cs-img-3'>
							<img className='cs-img-3'src='img/Decooda.png'></img>
						</section>
					</section>
				</div>
			</div>
		</>			
	);
}

export default CustomerStories