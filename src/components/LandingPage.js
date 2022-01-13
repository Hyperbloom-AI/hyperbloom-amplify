import React from 'react';

function LandingPage() {

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
                    <button className="btn type-1">Learn About Us!</button>
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
                  <button className="btn type-1 centered">Read More.</button>
                </div>
                <div className="services-right">
                  <img src="img/services-hero.png" className="services-hero"/>
                </div>
              </div>
              <div className="people__wrapper">
                <h2>Hyperfounders</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="promoted-people__wrapper">
                  <img className="promoted_person" src="img/cmcn.jpg"/>
                  <img className="promoted_person" src="img/cmcn.jpg"/>
                  <img className="promoted_person" src="img/cmcn.jpg"/>
                </div>
                <p className="margin-ye">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <button className="btn type-1 centered">Join the Team!</button>
              </div>
            </section>
          </main>
        </>
    );
}


export default LandingPage;