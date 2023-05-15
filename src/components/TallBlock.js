import '../App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function TallBlock(props) {
  return (
    <div className='mx-[1%] my-[2%] flex max-h-[90vh] max-w-[24vw] flex-col items-center justify-between gap-4 rounded-md bg-green-100 px-[2] py-[10px] opacity-80 hover:opacity-100'>
      <a href={props.siteLink}>
        <img
          className='max-w-[23vw] border-2 border-solid border-gray-800'
          src={`${process.env.PUBLIC_URL}/${props.image}`}
          alt={props.imageAlt}
          title={props.hoverText}
        />
      </a>
      <div className='flex min-h-[34vh] flex-col items-stretch break-words p-[3%]'>
        <div className='text-h2 font-bold leading-none'>{props.title}</div>
        <div className='text-h6 leading-[1.5vw]'>{props.description}</div>
      </div>
      <div className='flex w-[80%] flex-col items-center justify-between border-t-2 border-solid border-gray-800 p-[3%]'>
        <div className='flex flex-col justify-center text-h5'>
          Used technologies:
          <div className='flex flex-row justify-center text-h1'>
            {props.icons}
          </div>
          <button
            className='mt-[8%] w-[80%] cursor-pointer rounded-[11px] bg-black px-[3%] py-[4%] text-center text-base text-h6 text-lightgreen opacity-90 hover:opacity-100'
            onClick={() => window.open(`${props.repoLink}`, '_blank')}
          >
            Go to
            <FontAwesomeIcon className='px-[3%]' icon={faGithub} />
            repository
          </button>
        </div>
      </div>
      <button
        className='w-[60%] cursor-pointer rounded-[11px] bg-black px-[3%] py-[3%] text-center text-base text-h6 text-lightgreen opacity-90 hover:opacity-100'
        onClick={() => window.open(`${props.repoLink}`, '_blank')}
      >
        Go to
        <FontAwesomeIcon className='px-[3%]' icon={faGithub} />
        repository
      </button>
    </div>
  );
}

export default TallBlock;