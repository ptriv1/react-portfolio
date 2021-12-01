import React from 'react';
import resume from '../cv.pdf';

function Resume() {
    return (
        <div className="resume">
            <h1 className="resume-header-title">Resume</h1>
            <p className="resume-paragraph">Please click on my link to view my resume.</p>
            <p><a href={resume}>View my CV!</a></p>
        </div>
    )
}

export default Resume;