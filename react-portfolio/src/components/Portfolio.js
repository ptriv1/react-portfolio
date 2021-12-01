import React from 'react';
import bookClub from  '../book-club-collective.jpg';
import firstProject from '../first-project.png';
import planner from '../planner.png';
import rottenTrailers from '../rotten-trailers.jpg';
import teamProfileGenerator from '../team-profile-generator.png';
import workoutTracker from '../workout-tracker.jpg';


function Portfolio() {
    return (
      <div className="portfolio">
          <h1 className="portfolio-heading">Portfolio</h1>
          <div className="project">
            <h3 className="project-title">Workout Tracker</h3>
            <img className="portfolio-picture" src={workoutTracker} alt="workout-tracker"/>
            <p><a href="https://github.com/ptriv1/code-workout-tracker">Workout Tracker Code</a></p>
            <p className="project-page-link"><a href="https://shrouded-earth-16833.herokuapp.com/">Deployed Workout Tracker</a></p>
            <p className="description">This application is a fitness tracker in the browser allowing users to add exercises and workouts. Languages used include HTML, CSS, and JavaScript, and MongoDB and NoSQL were also used.</p>
          </div>
          <div className="project">
              <h3 className="project-title">Book Club Collective</h3>
              <img className="portfolio-picture" src={bookClub} alt="book-club-collective"/>
              <p><a href="https://github.com/stevenslade/Book-Club-Collective">Book Club Collective Code</a></p>
              <p className="project-page-link"><a href="https://intense-tor-64466.herokuapp.com/">Book Club Collective</a></p>
              <p class="description">In the second section of the boot camp, Node.js is covered.  My group, the Book Club Collective group, chose to create a project that would allow users to register, login, and discuss books.  A few of the languages/technologies we used include JavaScript, Handlebars, and Node.js.</p>
          </div>
          <div className="project">
              <h3 className="project-title">Team Profile Generator</h3>
              <img className="portfolio-picture" src={teamProfileGenerator} alt="profile-generator"/>
              <p><a href="https://github.com/ptriv1/team-profile-generator">Team Profile Generator Code</a></p>
              <p className="project-page-link"><a href="https://drive.google.com/file/d/1vjBFuQ4qM86lWci3-0ydqH6YzYVG8S_4/view">Team Profile Generator Demo</a></p>
              <p className="description"> This assignment is an application allowing users to enter managers and employees.  Languages used include HTML, CSS, Node.js, and JavaScript.</p>
          </div>
          <div className="project">
            <h3 className="project-title">Work Day Planner</h3>
            <img className="portfolio-picture" src={planner} alt="planner"/>
            <p><a href="https://github.com/ptriv1/planner">Planner Code</a></p>
            <p className="project-page-link"><a href="https://ptriv1.github.io/planner/">Planner Page</a></p>
            <p className="description">This is a planner that shows time blocks from 8 am to 5 pm. The user can click into the time blocks and enter appointments. Blocks are different colors depending on whether the hour is in the past, present, or future. The appointments entered persist and when visitors return to the planner the appointments entered display in the planner.</p>
          </div>
          <div className="project">
            <h3 className="project-title">Rotten Trailers</h3>
            <img className="portfolio-picture" src={rottenTrailers} alt="rotten-trailers"/>
            <p><a href="https://github.com/jeffcela/Rotten_Trailers">Rotten Trailers Code</a></p>
            <p className="project-page-link"><a href="https://jeffcela.github.io/Rotten_Trailers/index.html">Rotten Trailers Page</a></p>
            <p className="description">This group project allows users to search for movies, watch trailers, and discover new movies.</p>
          </div>
          <div className="project">
            <h3 className="project-title">Code Refactor</h3>
            <img className="portfolio-picture" src={firstProject} alt="first-project"/>
            <p><a href="https://github.com/ptriv1/code-refactor-homework">Code Refactor Code</a></p>
            <p className="project-page-link"><a href="https://ptriv1.github.io/code-refactor-homework/">Code Refactor Page</a></p>
            <p className="description">This assignment was a code refactor.  The original page was not accessible for users with screen readers.  My code refactor adds semantic HTML and consolidates CSS so the code is cleaner.</p>
          </div>
      </div>  
    )
}

export default Portfolio;