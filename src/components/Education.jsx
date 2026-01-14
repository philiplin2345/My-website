import React from 'react';

const Education = () => {
    return (
        <div className="section">
            <div className="container cc-education">
                <div className="h4 text-center mb-4 title">Education</div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body cc-education-header">
                                <p>Sep 2017 - June 2019</p>
                                <div className="h5">Master's Degree</div>
                            </div>
                        </div>
                        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">Master of Applied Science</div>
                                <p className="category">
                                    Queens University <i>Kingston, Ontario</i>
                                </p>
                                <p>Overall GPA: 4.08/4.3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body cc-education-header">
                                <p>Sep 2012 - June 2016</p>
                                <div className="h5">Bachelor's Degree</div>
                            </div>
                        </div>
                        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">Bachelor of Engineering</div>
                                <p className="category">
                                    Tsing Hua University <i>Hsinchu, Taiwan</i>
                                </p>
                                <p>Overall GPA: 3.83/4.3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
