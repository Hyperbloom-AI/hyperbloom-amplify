import React from "react";

import { faGithub, faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {


    return (
        <>
            <section className="footer">
                <div>
                    <body className='footer-body'>
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
                        <img className='logo-adjust' src='img/hyperbloom-banner_white_on_black_small.png'></img>
                    </body>
                </div>
            </section>
        </>
    )
}

export default Footer;