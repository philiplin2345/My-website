import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollDistance = 400; // Match color-on-scroll value
            if (window.scrollY > scrollDistance) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        document.documentElement.classList.toggle('nav-open');
    };

    return (
        <header>
            <div className="profile-page sidebar-collapse">
                <nav
                    className={`navbar navbar-expand-lg fixed-top bg-primary ${isTransparent ? 'navbar-transparent' : 'navbar-scrolled'}`}
                    color-on-scroll="400"
                >
                    <div className="container">
                        <div className="navbar-translate">
                            <a className="navbar-brand" href="#" rel="tooltip">Philip's CV</a>
                            <button
                                className={`navbar-toggler navbar-toggler ${isNavOpen ? 'toggled' : ''}`}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navigation"
                                aria-controls="navigation"
                                aria-expanded={isNavOpen}
                                aria-label="Toggle navigation"
                                onClick={toggleNav}
                            >
                                <span className="navbar-toggler-bar bar1" />
                                <span className="navbar-toggler-bar bar2" />
                                <span className="navbar-toggler-bar bar3" />
                            </button>
                        </div>
                        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navigation">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link smooth-scroll" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smooth-scroll" href="#experience">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smooth-scroll" href="#programming-feats">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
