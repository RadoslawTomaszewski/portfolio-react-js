import './App.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

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
  </>
  )
}

function Home() {
  return (<><div>Home</div></>);
}

function Education() {
  return (<><div>Education</div></>);
}

function Experiences() {
  return (<><div>Experiences</div></>);
}

function Projects() {
  return (<><div>Projects</div></>);
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
