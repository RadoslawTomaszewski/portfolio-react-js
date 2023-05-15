import '../App.css';
import React from 'react';

const WideBlock = ({
  years,
  name,
  city,
  title2,
  title,
  features,
  image,
  imageAlt,
}) => {
  return (
    <div className='my-5 flex min-h-[13vw] flex-col items-center justify-between rounded-md bg-green-100 p-4 opacity-80 hover:opacity-100 md:flex-row'>
      <div className='flex flex-col items-stretch break-words'>
        <div className='text-h4 font-bold leading-none'>{years}</div>
        <div className='text-h2 font-bold leading-none'>{name}</div>
        <div className='text-h4 font-bold leading-none'>{city}</div>
        {title2 && <div className='text-h6 italic leading-none'>{title2}</div>}
        <div className='text-h6 italic'>{title}</div>
        {features?.map((feature) => (
          <div key={feature} className='text-h6 leading-none'>
            {feature}
          </div>
        ))}
      </div>
      <img
        className='max-h-[11vw] border-2 border-solid border-black'
        src={`${process.env.PUBLIC_URL}/${image}`}
        alt={imageAlt}
      />
    </div>
  );
};

export default WideBlock;
