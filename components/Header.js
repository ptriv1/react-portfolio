import React from 'react';

export default function Nav() {
  const linkStyle = { border: '2px black', padding: '10px'};
  return (
    <nav className="main-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'serif',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
  
}