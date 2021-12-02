import React from 'react';
import resumeFirst from '../cvpage1.jpg';
import resumeTwo from '../cvpage2.jpg';
import camilleOrgel from '../camille-orgel-unsplash.jpg';

function Resume() {
    return (
        <div className="resume">
            <h1 className="resume-header-title">Resume</h1>
            <img className="resume-page-picture" src={camilleOrgel} alt="camille-orgel"/>
            <p className="resume-paragraph">Please click on my below links to view my resume.</p>
            <div className="resume-links-paragraphs">
            <p><a href={resumeFirst}>View the first page of my CV!</a></p>
            <p><a href={resumeTwo}>View the second page of my CV!</a></p>
            </div>
        </div>
    )
}

export default Resume;