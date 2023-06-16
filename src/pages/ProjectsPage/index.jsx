import { TallBlock } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faVuejs,
  faJava,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import memory from "../../assets/img/memory-game.jpg";
import sop from "../../assets/img/sop.png";
import todolist from "../../assets/img/todolist.png";
import { useTranslation } from "react-i18next";

export function ProjectsPage() {
  const { t } = useTranslation();

  const titleTodo = t("titleTodo");
  const hoverText = t("hoverText");
  const descriptionTodo = t("descriptionTodo");

  const hoverTextMemory = t("hoverTextMemory");
  const descriptionMemory = t("descriptionMemory");

  const titleSOP = t("titleSOP");
  const descriptionSOP = t("descriptionSOP");

  return (
    <>
      <div className="flex flex-row">
        <TallBlock
          siteLink="https://radoslawtomaszewski.github.io/todolist_frontend/"
          hoverText={hoverText}
          image={todolist}
          imageAlt="ToDoList"
          title={titleTodo}
          description={descriptionTodo}
          icons={
            <>
              <FontAwesomeIcon
                className="px-[1vw] hover:text-html"
                icon={faJava}
                title="java"
              />
              <FontAwesomeIcon
                className="px-[1vh] hover:text-react"
                icon={faReact}
                title="react.js"
              />
              <FontAwesomeIcon
                className="px-[1vw] hover:text-bootstrap"
                icon={faBootstrap}
                title="bootstrap"
              />
            </>
          }
          repoLink="https://github.com/RadoslawTomaszewski/todolist_frontend"
        />
        <TallBlock
          siteLink="https://radoslawtomaszewski.github.io/memory/"
          hoverText={hoverTextMemory}
          image={memory}
          imageAlt="Pokemon Memory Game"
          title="Pokemon Memory Game"
          description={descriptionMemory}
          icons={
            <>
              <FontAwesomeIcon
                className="px-[1vw] hover:text-html"
                icon={faHtml5}
                title="HTML5"
              />
              <FontAwesomeIcon
                className="px-[1vh] hover:text-css"
                icon={faCss3Alt}
                title="CSS3"
              />
              <FontAwesomeIcon
                className="px-[1vw] hover:text-javascript"
                icon={faJsSquare}
                title="Java Script"
              />
            </>
          }
          repoLink="https://github.com/RadoslawTomaszewski/memory"
        />
        <TallBlock
          siteLink=""
          hoverText=""
          image={sop}
          imageAlt="Patient Service GUI"
          title={titleSOP}
          description={descriptionSOP}
          icons={
            <>
              <FontAwesomeIcon
                className="px-[1vw] hover:text-vue"
                icon={faVuejs}
                title="vue.js"
              />
              <FontAwesomeIcon
                className="px-[1vh] hover:text-bootstrap"
                icon={faBootstrap}
                title="bootstrap"
              />
            </>
          }
          repoLink="https://github.com/Lukaszpietrzykowski/patient-service-gui"
        />
      </div>
    </>
  );
}
