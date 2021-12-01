import React from 'react';

function About() {
  return (
    <div class="about">
      <h1>About Me</h1>
      <div class="about-container">
        <div class="flex-left">
          <img class="about-picture" src="react-portfolio\src\dinner-picture.jpg" alt="picture"/>
        </div>
        <div class="flex-right">
          <p>Currently I work in customer service/software support and enjoy working with a wide variety of customers.  I'm also enrolled in a boot camp for web development through Georgia Tech where we learned CSS, HTML, JavaScript, Node.js, and React.</p>
          <p>In my spare time I enjoy spending time with my family and reading fiction or nonfiction.</p>
        </div>
      </div>
    </div>
  )
}

export default About;