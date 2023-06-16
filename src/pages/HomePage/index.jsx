import helloworld from "../../assets/img/helloworld.png";
import { useTranslation } from "react-i18next";

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex">
        <img src={helloworld} alt="hello world" />
      </div>
      {t("dupa")}
    </>
  );
}
