import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export function TallBlock(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="mx-[1%] my-[2%] flex max-h-[90vh] max-w-[24vw] flex-col items-center justify-between rounded-md bg-green-100 px-[2] py-[2%] opacity-80 hover:opacity-100">
        <a href={props.siteLink}>
          <img
            className="max-w-[23vw] border-2 border-solid border-gray-800"
            src={props.image}
            alt={props.imageAlt}
            title={props.hoverText}
          />
        </a>
        <div className="flex min-h-[20vh] flex-col items-stretch break-words p-[3%] lg:min-h-[34vh]">
          <div className="text-h2 font-bold leading-none">{props.title}</div>
          <div className="text-h6 leading-[1.5vw]">{props.description}</div>
        </div>
        <div className="flex w-[80%] flex-col items-center justify-between border-t-2 border-solid border-gray-800 p-[3%]">
          <div className="flex flex-col justify-center text-h5">
            {t("Used technologies:")}
            <div className="flex flex-row justify-center text-h1">
              {props.icons}
            </div>
          </div>
          <button
            className="mt-[8%] w-[80%] cursor-pointer rounded-[11px] bg-black px-[3%] py-[4%] text-center text-base text-h6 text-lightgreen opacity-90 hover:opacity-100"
            onClick={() => window.open(`${props.repoLink}`, "_blank")}
          >
            {t("Go to")}
            <FontAwesomeIcon className="px-[3%]" icon={faGithub} />
            {t("repository")}
          </button>
        </div>
      </div>
    </>
  );
}
