import React from 'react';

const About = () => {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Summary</div>
                                <ul>
                                    <li>Software Engineer</li>
                                    <li>
                                        5 years experience of facilitating software
                                        solutions in the consumer electronics industry
                                    </li>
                                    <li>
                                        Adept in finding solutions and analyzing problems
                                    </li>
                                    <li>
                                        Actively learning about software engineering topics
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Basic Information</div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <strong className="text-uppercase">Age:</strong>
                                    </div>
                                    <div className="col-sm-8">30</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <strong className="text-uppercase">Email:</strong>
                                    </div>
                                    <div className="col-sm-8">philiplin2435@gmail.com</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <strong className="text-uppercase">Phone:</strong>
                                    </div>
                                    <div className="col-sm-8">+0978-xxx-xxx</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <strong className="text-uppercase">Address:</strong>
                                    </div>
                                    <div className="col-sm-8">Taiwan</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4">
                                        <strong className="text-uppercase">Language:</strong>
                                    </div>
                                    <div className="col-sm-8">English, Mandarin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
