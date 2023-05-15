import "../App.css";
import React from "react";

function WideBlock(props) {
  return (
    <>
      <div className="bg-green-100 opacity-80 p-4 rounded-md flex justify-between items-center min-h-[13vw] hover:opacity-100 my-5">
        <div className="flex flex-col items-stretch break-words">
          <div className="text-h4 font-bold leading-none">{props.years}</div>
          <div className="text-h2 font-bold leading-none">{props.name}</div>
          <div className="text-h4 font-bold leading-none">{props.city}</div>
          <div className="text-h6 italic leading-none">{props.title2}</div>
          <div className="text-h6 italic">{props.title}</div>
          <div className="text-h6 leading-none">{props.features1}</div>
          <div className="text-h6 leading-none">{props.features2}</div>
          <div className="text-h6 leading-none">{props.features3}</div>
        </div>
        <img
          className="border-2 border-solid border-black max-h-[11vw]"
          src={`${process.env.PUBLIC_URL}/${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </>
  );
}

export default WideBlock;
