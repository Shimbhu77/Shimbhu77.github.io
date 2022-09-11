import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>About me</h2>
                    <p style={{ color: theme.tertiary80, textAlign: "justify" }}>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img src={theme.aboutimg1} alt="" />
                </div>
            </div>
        </div>

    )
}

export default About
