import '../App.css';
import React from 'react';
import TallBlock from './TallBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';

export const Projects = () => (
  <div className='flex flex-row'>
    <TallBlock
      siteLink='https://radoslawtomaszewski.github.io/memory/'
      hoverText='Naciśnij aby zagrać'
      image='memory-game.jpg'
      imageAlt='Pokemon Memory Game'
      title='Pokemon Memory Game'
      description='A memory game created using pure JavaScript. The game features two
                      color themes and four different game modes: single player, two
                      players, player vs. computer and player vs. smart computer.'
      icons={
        <>
          <FontAwesomeIcon
            className='px-[1vw] hover:text-html'
            icon={faHtml5}
            title='HTML5'
          />
          <FontAwesomeIcon
            className='px-[1vh] hover:text-css'
            icon={faCss3Alt}
            title='CSS3'
          />
          <FontAwesomeIcon
            className='px-[1vw] hover:text-javascript'
            icon={faJsSquare}
            title='Java Script'
          />
        </>
      }
      repoLink='https://github.com/RadoslawTomaszewski/memory'
    />
    <TallBlock
      siteLink='https://radoslawtomaszewski.github.io/memory/'
      hoverText='Naciśnij aby zagrać'
      image='sop.png'
      imageAlt='Patient Service GUI'
      title='Patient Service GUI'
      description="The frontend component of a student team web application project.
                    It is a patient management system designed for ambulance rescuers
                    and medical staff, allowing for efficient verification of the
                    available number of hospital beds and management of the patient's
                    medical history."
      icons={
        <>
          <FontAwesomeIcon
            className='px-[1vw] hover:text-vue'
            icon={faVuejs}
            title='vue.js'
          />
          <FontAwesomeIcon
            className='px-[1vh] hover:text-bootstrap'
            icon={faBootstrap}
            title='bootstrap'
          />
        </>
      }
      repoLink='https://github.com/Lukaszpietrzykowski/patient-service-gui'
    />
  </div>
);
