import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export function TallBlock(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="m-2 flex flex-col flex-wrap items-center justify-between rounded-md bg-green-100 py-3 lg:min-h-[80vh] lg:w-[23vw]">
        <div className="flex items-center justify-center p-1">
          <a href={props.siteLink}>
            <img
              className="hidden border-2 border-solid border-gray-800  text-center lg:block lg:w-[100%]"
              src={props.image}
              alt={props.imageAlt}
              title={props.hoverText}
            />
            <div className="text-4xl font-bold lg:mt-2">{props.title}</div>
          </a>
        </div>
        <div className="flex flex-col items-stretch break-words lg:p-2">
          <div className="hidden text-base lg:block">{props.description}</div>
        </div>
        <div className="flex flex-col items-center justify-between border-gray-800 p-2 lg:border-t-2 lg:border-solid">
          <div className="hidden flex-col items-center justify-center text-lg lg:flex">
            {t("Used technologies:")}
            <div className="my-3 flex flex-row justify-center text-4xl">
              {props.icons}
            </div>
          </div>
          <button
            className="min-w-auto cursor-pointer rounded-[11px] bg-black px-3 py-3 text-center text-base text-h6 text-lightgreen opacity-90 hover:opacity-100"
            onClick={() => window.open(`${props.repoLink}`, "_blank")}
          >
            {t("Go to")}
            <FontAwesomeIcon className="px-3" icon={faGithub} />
            {t("repository")}
          </button>
        </div>
      </div>
    </>
  );
}
