import React from 'react';
import dinnerPicture from '../dinner-picture.jpg';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div class="about-container">
        <div class="flex-left">
          <img class="about-picture" src={dinnerPicture} alt="picture"/>
        </div>
        <div class="flex-right">
          <p class="about-paragraph">Currently I work in customer service/software support and enjoy working with a wide variety of customers.  I'm also enrolled in a boot camp for web development through Georgia Tech where we learned CSS, HTML, JavaScript, Node.js, and React.</p>
          <p class="about-paragraph">In my spare time I enjoy spending time with my family and reading fiction or nonfiction.</p>
        </div>
      </div>
    </div>
  )
}

export default About;