import React from 'react';
import tempPostData from './data/tempPostData.js'


function LandingPage() {
    const unsortedPosts = tempPostData
    const sortedPosts = unsortedPosts.sort(function(a,b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });

    const featuredPost = sortedPosts[0]
    const nextPosts = [sortedPosts[1], sortedPosts[2], sortedPosts[3]]



    console.log(nextPosts)

    return (
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
                <h2>Hyperfounders</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="promoted-people__wrapper">
                  <img className="promoted_person" src="img/cmcn.jpg"/>
                  <img className="promoted_person" src="img/cmcn.jpg"/>
                  <img className="promoted_person" src="img/cmcn.jpg"/>
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
    );
}


export default LandingPage;