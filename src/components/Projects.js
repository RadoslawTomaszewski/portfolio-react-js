import '../App.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  return (
  <>
  <div className='tile-column'> 
    <div className='picture-column'>
        <a href="https://radoslawtomaszewski.github.io/memory/"><img src={`${process.env.PUBLIC_URL}/memory-game.jpg`} alt="pokemon memory game" /></a>
    </div>
    <div className='content'>
      <h2>Pokemon Memory Game </h2>
      <h6>A memory game created using pure JavaScript. The game features two color themes and four different game modes: single player, two players, player vs. computer and player vs. smart computer</h6>
    </div>
    <div className='technologies'>
      <h6>Used technologies:</h6>
      <div className='icons'>
        <FontAwesomeIcon className='icon' icon={faHtml5} />
        <FontAwesomeIcon className='icon' icon={faCss3Alt} />
        <FontAwesomeIcon className='icon' icon={faJsSquare} />
        <FontAwesomeIcon className='icon' icon={faGit} />
      </div>
    </div>
    <button className='button-go-to'onClick={() => window.open('https://github.com/RadoslawTomaszewski/memory', '_blank')}>
      Go to<FontAwesomeIcon className='icon-button' icon={faGithub} />repository
    </button>
  </div>
  
  </>
  );
}

export default Projects;
