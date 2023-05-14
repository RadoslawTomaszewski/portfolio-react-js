import '../App.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faGithub, faBootstrap, faVuejs } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  return (
  <>
  <div className='projects'>
    <div className='tile-column'> 
      <div className='picture-column'>
          <a href="https://radoslawtomaszewski.github.io/memory/"><img src={`${process.env.PUBLIC_URL}/memory-game.jpg`} alt="pokemon memory game" /></a>
      </div>
      <div className='content-projects'>
        <h2>Pokemon Memory Game </h2>
        <h6>A memory game created using pure JavaScript. The game features two color themes and four different game modes: single player, two players, player vs. computer and player vs. smart computer</h6>
      </div>
      <div className='technologies'>
        <h6>Used technologies:</h6>
        <div className='icons'>
          <FontAwesomeIcon className='icon' icon={faHtml5} title="HTML5"/>
          <FontAwesomeIcon className='icon' icon={faCss3Alt} title="CSS3" />
          <FontAwesomeIcon className='icon' icon={faJsSquare} title="Java Script" />
        </div>
      </div>
      <button className='button-go-to'onClick={() => window.open('https://github.com/RadoslawTomaszewski/memory', '_blank')}>
        Go to<FontAwesomeIcon className='icon-button' icon={faGithub} />repository
      </button>
    </div>
    <div className='tile-column'> 
      <div className='picture-column'>
        <img src={`${process.env.PUBLIC_URL}/sop.png`} alt="sop" />
      </div>
      <div className='content-projects'>
        <h2>Patient Service GUI </h2>
        <h6>The frontend component of a student team web application project. It is a patient management system designed for ambulance rescuers and medical staff, allowing for efficient verification of the available number of hospital beds and management of the patient's medical history.</h6>
      </div>
      <div className='technologies'>
        <h6>Used technologies:</h6>
        <div className='icons'>
        <FontAwesomeIcon className='icon' icon={faVuejs} title="vue.js" />
          <FontAwesomeIcon className='icon' icon={faBootstrap} title="Bootstrap" />
        </div>
      </div>
      <button className='button-go-to'onClick={() => window.open('https://github.com/Lukaszpietrzykowski/patient-service-gui', '_blank')}>
        Go to<FontAwesomeIcon className='icon-button' icon={faGithub} />repository
      </button>
    </div>
  </div>
  </>
  );
}

export default Projects;
