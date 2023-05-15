import '../App.css';
import React from 'react';
import WideBlock from './WideBlock';
import { experience } from '../assets/data';

function Experiences() {
  return experience?.map((item) => <WideBlock {...item} />);
}

export default Experiences;
