import '../../App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { NavbarItem } from './NavbarItem';
import avatar from '../../assets/images/me.jpg';

const navbarList = [
  {
    to: '',
    text: 'home',
  },
  {
    to: 'education',
    text: 'education',
  },
  {
    to: 'experience',
    text: 'experience',
  },
  {
    to: 'projects',
    text: 'projects',
  },
  {
    to: 'hobby',
    text: 'hobby',
  },
];

function NavBar() {
  return (
    <>
      <img src={avatar} alt='me' />
      <ul>
        {navbarList.map(({ to, text }) => (
          <NavbarItem to={to} text={text} />
        ))}
      </ul>
      <div className='mt-10 flex justify-center gap-4'>
        <FontAwesomeIcon className='icon' icon={faGithub} />
        <FontAwesomeIcon className='icon' icon={faLinkedin} />
        <FontAwesomeIcon className='icon' icon={faFacebook} />
      </div>
      <div className='hiddenInfo'></div>
    </>
  );
}

export default NavBar;
