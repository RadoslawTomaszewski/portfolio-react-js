import './App.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

function NavBar({ setActiveTab, activeTab }) {
  return (
  <>
    <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="me" />
    <ul>
      <li><div className={`nav ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</div></li>
      <li><div className={`nav ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</div></li>
      <li><div className={`nav ${activeTab === 'experiences' ? 'active' : ''}`} onClick={() => setActiveTab('experiences')}>Experiences</div></li>
      <li><div className={`nav ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects</div></li>
      <li><div className={`nav ${activeTab === 'hobby' ? 'active' : ''}`} onClick={() => setActiveTab('hobby')}>Hobby</div></li>
    </ul>
    <div className='social'>
    <FontAwesomeIcon className='icon' icon={faGithub} />
    <FontAwesomeIcon className='icon' icon={faLinkedin} />
    <FontAwesomeIcon className='icon' icon={faFacebook} />
    </div>
    <div className='hiddenInfo'>
    </div>
  </>
  )
}

function Home() {
  return (
  <>
    <div>Home</div>
  </>
  );
}

function Education() {
  return (
  <>
    <div className='tile'>
      <div className='content'>
        <h4>2020 - 2024</h4>
        <h2>Szkoła Główna Gospodarstwa Wiejskiego</h2>
        <h4>Warszawa</h4>
        <h6>Wydział Zastosowań Informatyki i Matematyki</h6>
        <h6>Kierunek: Informatyka</h6>
        <h6>Specjalizacja: Inżynieria Systemów Informatycznych</h6>
        <h6>dwukrotnie w rankingu 3% studentów z najwyższą średnią na roku</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/sggw.jpg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>

    <div className='tile'>
      <div className='content'>
        <h4>2015 - 2018</h4>
        <h2>Liceum Ogólnokształcące nr 1 im. K. I. Gałczyńskiego</h2>
        <h4>Otwock</h4>
        <h6>profil matematyka / fizyka / informatyka</h6>
        <h6>100% na egzaminie maturalnym z matematyki (część pisemna)<br/>100% na egzaminie maturalnym z języka polskiego (część ustna)</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/lo.jpg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>

    <div className='tile'>
      <div className='content'>
        <h4>2005 - 2015</h4>
        <h2>Publiczna Szkoła Podstawowa i Gimnazjum w Sobieniach-Jeziorach</h2>
        <h6>czterokrotny mistrz powiatu otwockiego w biegu na 100 m</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/sobienie.jpg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>
  </>
  );
}

function Experiences() {
  return (
  <>
    <div className='tile'>
      <div className='content'>
        <h4>2021 - </h4>
        <h2>Centrum Edukacji i.know</h2>
        <h4>Otwock</h4>
        <h6>Korepetytor z matematyki</h6>
        <h6>przygotowanie do matury z zakresu rozszerzonego</h6>
        <h6>przygotowanie do matury z zakresu podstawowego</h6>
        <h6>przygotowanie do egzaminu ósmoklasisty</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/iknow.png`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>
    <div className='tile'>
      <div className='content'>
        <h4>2018 - 2020</h4>
        <h2>TCC Telecomunication Customer Care </h2>
        <h4>Warszawa</h4>
        <h6>Konsultant Back Office</h6>
        <h6>sprzedaż abonamentów i obsługa klienta</h6>
        <h6>moderacja Social Media</h6>
      </div>
      <div className='picture'>
        <img src={`${process.env.PUBLIC_URL}/cp_plus.jpeg`} alt="liceum ogolnoksztalcace" />
      </div>
    </div>
  </>);
}

function Projects() {
  return (
  <>
  <div className='tile-column'> 
    <div className='picture-column'>
        <img src={`${process.env.PUBLIC_URL}/memory-game.jpg`} alt="pokemon memory game" />
    </div>
    <div className='content'>
      <h2>Pokemon Memory Game </h2>
      <h6>A memory game created using pure JavaScript. The game features two color themes and four different game modes: single player, two players, player vs. computer and player vs. smart computer</h6>
    </div>
    <div className='technologies'>
      <h6>Used technologies:</h6>
      <div>
        <FontAwesomeIcon className='icon' icon={faHtml5} />
        <FontAwesomeIcon className='icon' icon={faCss3Alt} />
        <FontAwesomeIcon className='icon' icon={faJsSquare} />
        <FontAwesomeIcon className='icon' icon={faGit} />
      </div>
    </div>
    <button className='button-go-to'>
      Go to<FontAwesomeIcon className='icon-button' icon={faGithub} />repository
    </button>
  </div>
  
  </>
  );
}

function Hobby() {
  return (<><div>Hobby</div></>);
}

export default function Container() {
  const [activeTab, setActiveTab] = useState('home');

  let content;
  if (activeTab === 'home') {
    content = <Home />;
  } else if (activeTab === 'education') {
    content = <Education />;
  } else if (activeTab === 'experiences') {
    content = <Experiences />;
  } else if (activeTab === 'projects') {
    content = <Projects />;
  } else if (activeTab === 'hobby') {
    content = <Hobby />;
  }

  return (
    <>
      <div className='portfolio'>
        <div className='leftSide'>
          <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className='rightSide'>
          {content}
        </div>
      </div>
    </>
  );
}
