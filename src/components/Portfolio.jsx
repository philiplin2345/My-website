import React, { useState } from 'react';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('youtube-videos');

    return (
        <div className="section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="h4 text-center mb-4 title">Portfolio</div>
                        <div className="nav-align-center">
                            <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                <li className="nav-item">
                                    <span
                                        className={`nav-link ${activeTab === 'youtube-videos' ? 'active' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setActiveTab('youtube-videos')}
                                    >
                                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span
                                        className={`nav-link ${activeTab === 'event-photos' ? 'active' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setActiveTab('event-photos')}
                                    >
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span
                                        className={`nav-link ${activeTab === 'music' ? 'active' : ''}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setActiveTab('music')}
                                    >
                                        <i className="fa fa-music" aria-hidden="true"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content gallery mt-5">
                    <div className={`tab-pane ${activeTab === 'youtube-videos' ? 'active' : ''}`} id="youtube-videos" role="tabpanel">
                        <div className="mx-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/w-C8jPUgAx0" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1upeb0Oipsw" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </div>
                                <div className="col-md-6">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/E6-wgY5t30Y" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cluFwREe0l4" frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </div>
                                <div className="col-md-6">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JFNF8-GO9Lg"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'event-photos' ? 'active' : ''}`} id="event-photos" role="tabpanel">
                        <div className="mx-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised">
                                        <a href="#event-photos">
                                            <figure className="cc-effect">
                                                <img src="/images/portfolio/solana1.jpg"
                                                    alt="Image" />
                                                <figcaption>
                                                    <div className="h4">Solana 3.0 Hackathon</div>
                                                    <p>30 hour challenge</p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised">
                                        <a href="#event-photos">
                                            <figure className="cc-effect">
                                                <img src="/images/portfolio/solana2.jpg"
                                                    alt="Image" />
                                                <figcaption>
                                                    <div className="h4">Solana 3.0 Hackathon</div>
                                                    <p>30 hour challenge</p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised">
                                        <a href="#event-photos">
                                            <figure className="cc-effect">
                                                <img src="/images/portfolio/solana3.jpg"
                                                    alt="Image" />
                                                <figcaption>
                                                    <div className="h4">Solana 3.0 Hackathon</div>
                                                    <p>30 hour challenge</p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="cc-porfolio-image img-raised">
                                        <a href="#event-photos">
                                            <figure className="cc-effect">
                                                <img src="/images/portfolio/solana4.jpg"
                                                    alt="Image" />
                                                <figcaption>
                                                    <div className="h4">Solana 3.0 Hackathon</div>
                                                    <p>30 hour challenge</p>
                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane ${activeTab === 'music' ? 'active' : ''}`} id="music" role="tabpanel">
                        <div className="mx-auto">
                            <div className="row">
                                <div className="col-md-12">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9rM-y3zdnBQ" title="YouTube video player"
                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
