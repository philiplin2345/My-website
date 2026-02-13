import React from 'react';

const Hero = () => {
    return (
        <div className="profile-page">
            <div className="wrapper">
                <div className="page-header page-header-small">
                    <div
                        className="page-header-image"
                        data-parallax="true"
                        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/cc-bg-1.jpg')` }}
                    >
                    </div>
                    <div className="container">
                        <div className="content-center">
                            <div className="cc-profile-image">
                                <a href="#"><img src={`${import.meta.env.BASE_URL}images/20221020z.jpg`} alt="Image" /></a>
                            </div>
                            <div className="h2 title">Philip Lin</div>
                            <p className="category text-white">
                                Software Developer
                            </p>
                            <a
                                className="btn btn-primary smooth-scroll mr-2"
                                href="#contact"
                                data-aos="zoom-in"
                                data-aos-anchor="data-aos-anchor"
                            >
                                Hire Me
                            </a>
                            <a
                                className="btn btn-primary"
                                href="https://drive.google.com/file/d/1fH8WgyhyZdSGiTn-LE4Y1RqfXyXfp69w/view?usp=sharing"
                                data-aos="zoom-in"
                                data-aos-anchor="data-aos-anchor"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="button-container">
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Google+">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="#" rel="tooltip" title="Follow me on Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
