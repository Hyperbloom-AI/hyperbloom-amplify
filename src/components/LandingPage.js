import React, { useState } from 'react';
import tempPostData from './data/tempPostData.js'
import tempPeopleData from './data/tempPeopleData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';
import SideBar from './SideBar.js'
import NavBar from './NavBar.js'



const LandingPage = () => {

  const [infoExpanded, setInfoExpanded] = React.useState(false)

  const unsortedPosts = tempPostData
  const sortedPosts = unsortedPosts.sort(function(a,b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  const featuredPost = sortedPosts[0]
  const nextPosts = [sortedPosts[1], sortedPosts[2], sortedPosts[3]]

  const people = tempPeopleData;
  const featuredPeople = tempPeopleData.filter(person => person.featured);

  function dayToNight(e) {
    e.preventDefault()
    setInfoExpanded(!infoExpanded)
  }


    console.log(nextPosts)

    {
      return(
        <>
          <div>
            <NavBar>
            </NavBar>
          </div>
          <main /*data-theme={infoExpanded ? "light" : "dark"} onClick={(e) => dayToNight(e)}*/>
            <div className='central-content__wrapper'>
              <img className='site-logo' src={infoExpanded ? "img/hyperbloom-banner_black_on_white_small.png" : "img/hyperbloom-banner_white_on_black_small.png"}/>
              <p className="site-description">Hyperbloom is a software engineering collective that builds data-driven systems to improve the human experience.</p>
            </div>
            <p className={infoExpanded ? "dont-display prompter" : "display prompter"}>{`${isMobile ? "Tap" : "Click"} anywhere for more info`}</p>
            <div className="expanded-content">
              <h2>What we do:</h2>
              <p>While we work throughout the tech sphere doing everything from full-stack development to robotics process automation, we specialize in a few key areas:</p>
              <div className='key-area'>
                <h2 className="key-area_heading">Data Engineering</h2>
                <p>We specialize in building data lakes. This includes data movement, storage, processing, management, and operations.</p>
              </div>
              <div className='key-area'>
                <h2 className="key-area_heading">Machine Learning</h2>
                <p>We specialize in MLOps, like model deployment and management. We also provide common machine learning solutions around personalization, forecasting, and optimization.</p>
              </div>
              <div className='key-area'>
                <h2 className="key-area_heading">Natural Language Processing</h2>
                <p>We specialize in conversational agents and their knowledge-bases, with a further specialization in graph databases. We also provide common natural language processing solutions around language generation and understanding.</p>
              </div>
            </div>
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
          </main>
        </>
      )  
    }
  /*  return (
        <>
          <main>
            <section className="splash-header">
              <div id="spacer__adsgw"></div>
              <div className="splash-content">
                <aside className="splash-title__wrapper">
                  <div className="splash-title-logo__wrapper">
                    <img src="img/logo.png" className="splash-title-logo"/>
                  </div>
                  <div className="splash-title-content__wrapper">
                    <h1 className="splash-title">Creative Cloud Computing</h1>
                    <h2 className="splash-subtitle">Building data driven systems that improve the human experience.</h2>
                    <button className="btn type-1 link">Learn About Us!</button>
                  </div>
                </aside>
                <div className="splash-hero__wrapper">
                  <img className="splash-hero" src="img/home-hero.png"/>
                </div>
              </div>

            </section>
            <section className="splash-supporters">
              <div id="spacer__fefsf"></div>
              <div className="supporters__wrapper">
                <div className="supporters-container">
                  <img className="supporter-logo" src="img/innowattslogo.png"/>
                  <img className="supporter-logo" src="img/apnlogo.png"/>
                  <img className="supporter-logo" src="img/jfranklogo.png"/>
                  <img className="supporter-logo" src="img/innovativelogo-black.png"/>
                </div>
              </div>
            </section>
            <section className="mission-and-services">
              <div className="mission__wrapper">
                <h2>Hypermission.</h2>
                <p className="large-p">Our mission is building data driven systems to improve the human experience</p>
              </div>
              <div className="services__wrapper">
                <div className="services-left">
                  <h2>Hyperservices.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <button className="btn type-1 centered link">Read More.</button>
                </div>
                <div className="services-right">
                  <img src="img/services-hero.png" className="services-hero"/>
                </div>
              </div>
              </section>
              <section className="people__wrapper">
                <h2>Featured People</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="promoted-people__wrapper">
                  { featuredPeople.map((person) => 
                      <div key={person.key} className="featured-person__wrapper link">
                        <img className="promoted-person" src={"img/" + person.image}/>
                        <div className="promoted-person__context">
                          <h2 className="promoted-person__name">{person.name}</h2>
                          <p className="promoted-person__title">{person.title}</p>
                        </div>
                      </div>
                    ) }
                </div>
                <p className="margin-ye">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <button className="btn type-1 centered link">Join the Team!</button>
              </section>
              <section className="blog__wrapper">
                <h2>Check Out Our Blog.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="new-posts__wrapper">
                  <article className="featured-post">
                    <img src={"img/" + featuredPost.headerImage} className="featured-post__hero-image"/>
                    <div className="featured-post__context">
                      <h2 className="featured-post__title">{featuredPost.title}</h2>
                    </div>
                  </article>
                  <div className="other-posts__wrapper">
                  { nextPosts.map((post) => 
                    <article key={post.date} className="featured-post__small">
                      <img src={"img/" + post.headerImage} className="featured-post__small__hero-image"/>
                      <div className="featured-post__small__context">
                        <h3 className="featured-post__small__title">{post.title}</h3>
                      </div>
                    </article>
                  ) }
                  </div>
                </div>
                <button className="btn type-1 centered link">Read More</button>
              </section>
          </main>
        </>
    )*/
}


export default LandingPage;