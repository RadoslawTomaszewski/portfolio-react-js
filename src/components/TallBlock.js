import "../App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function TallBlock(props) {
  return (
    <>
      <div className="opacity-80 hover:opacity-100 bg-green-100 rounded-md flex flex-col justify-between items-center my-[2%] mx-[1%] py-[2%] px-[2] max-h-[90vh] max-w-[24vw]">
        <a href={props.siteLink}>
          <img
            className="max-w-[23vw] border-2 border-solid border-gray-800"
            src={`${process.env.PUBLIC_URL}/${props.image}`}
            alt={props.imageAlt}
            title={props.hoverText}
          />
        </a>
        <div className="flex flex-col items-stretch break-words min-h-[34vh] p-[3%]">
          <div className="text-h2 font-bold leading-none">{props.title}</div>
          <div className="text-h6 leading-[1.5vw]">{props.description}</div>
        </div>
        <div className="flex flex-col items-center justify-between border-t-2 border-solid border-gray-800 w-[80%] p-[3%]">
          <div className="text-h5 flex justify-center flex-col">
            Used technologies:
            <div className="flex flex-row justify-center text-h1">
              {props.icons}
            </div>
          </div>
        </div>
        <button
          className="bg-black text-h6 rounded-[11px] w-[60%] px-[3%] py-[3%] text-lightgreen text-center text-base opacity-90 hover:opacity-100 cursor-pointer"
          onClick={() => window.open(`${props.repoLink}`, "_blank")}
        >
          Go to
          <FontAwesomeIcon className="px-[3%]" icon={faGithub} />
          repository
        </button>
      </div>
    </>
  );
}

export default TallBlock;
