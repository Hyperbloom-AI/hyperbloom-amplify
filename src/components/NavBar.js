import React from "react";
import { Link, link } from "react-router-dom";

const NavBar = () => {
    return (
    <>
        <section className="nav">
            <meta charSet='utf-8'></meta>
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'></meta>
            <link rel="stylesheet" href="sidebar.css"/>
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <a href="/" className="site-name"><img className='logo' src={"img/hyperbloom-banner_black_on_white_small.png"}/></a>
            <div>
                <ul>
                    <li>
                        <Link to="/WhoWeAre"><span>Who We Are</span>
                            <i className='bx bx-building'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Industries"><span>Industries</span>
                            <i className='bx bx-fingerprint'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Services"><span>Services</span>
                            <i className='bx bx-shape-polygon'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/CustomerStories"><span>Customer Stories</span>
                            <i className='bx bx-group'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Solutions"><span>Solutions</span>
                            <i className='bx bx-network-chart'></i>
                        </Link>
                    </li>
                    <li> 
                        <Link to="/ContactUs"><span>Contact Us</span>
                            <i className='bx bx-message-rounded-detail'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </>);
}

export default NavBar;
/*
const NavBar = () => {

    return(

            <section>
                <meta charset='utf-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'></meta>
                <link rel="stylesheet" href="sidebar.css"/>
                <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
                <div className="sidebar">
                    <div className="sidebarContent">
                        <div className="sidebarLogo">
                            <i class='bx bx-color'></i>
                            <div className="sideBarName">HyperBloom.ai</div>
                        </div>
                        <button onClick={()=>setShow(!show)}>
                            <i class='bx bx-menu' id="btn"></i>
                        </button>
                    </div>
                    <ul className='List'>
                        <li>        
                            <a href="/consultants">
                                <i class='bx bx-building'></i>
                                <span className="linkName">Meet Our Consultants</span>
                            </a>
                            <span className="tooltip">What each of our constulants do and their contact information.</span>
                        </li>
                        <li>
                           <a href="/services">
                                <i class='bx bx-fingerprint'></i>
                                <span className="linkName">HyperBloom Services</span>
                            </a>
                            <span className="tooltip">View all the services Hyperbloom has to offer in full detail.</span>
                        </li>
                        <li>
                            <a href="/stories">
                                <i class='bx bx-smile'></i>
                                <span className="linkName">Customer Stories</span>
                            </a>
                            <span className="tooltip">See what we have worked on, who we have worked with, how we have preformed in the past.</span>
                        </li>
                        <li>
                            <a href="/demos">
                                <i class='bx bx-scatter-chart'></i>
                                <span className="linkName">Our Work</span>
                            </a>
                            <span className="tooltip">Learn and play with some of the systems we have already built.</span>
                        </li>
                        <li>
                            <a href="/mission">
                                <i class='bx bxs-plane-take-off'></i>
                                <span className="linkName">HyperBloom.ai Mission</span>
                            </a>
                            <span className="tooltip">A scope into where we plan to be in the future, and how we plan to get there. </span>
                        </li> 
                        <li>
                            <a href="/contactUs">
                                <i class='bx bx-network-chart'></i>
                                <span className="linkName">Contact Us</span>
                            </a>
                            <span className="tooltip">Click here to send us a quick message about potential work.</span>
                        </li> 
                        <li>
                            <a href="#">
                                <i class='bx bx-search-alt'></i>
                                <input type="text" placeholder='Find...'></input>
                            </a>
                            <span className="tooltip"></span>
                        </li>  
                    </ul>
                </div>
            </section>
    )
}

export default NavBar;
*/