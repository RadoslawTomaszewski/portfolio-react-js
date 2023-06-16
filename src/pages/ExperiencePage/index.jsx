import { WideBlock } from "../../components";
import iknow from "../../assets/img/iknow.png";
import cyfrowypolsat from "../../assets/img/cp_plus.jpeg";
import { useTranslation } from "react-i18next";

export function ExperiencePage() {
  const { t } = useTranslation();
  const nameIknow = t("nameIknow");
  const titleIknow = t("titleIknow");
  const features1Iknow = t("features1Iknow");
  const features2Iknow = t("features2Iknow");
  const features3Iknow = t("features3Iknow");
  const titleCP = t("titleCP");
  const features1CP = t("features1CP");
  const features2CP = t("features2CP");
  const features3CP = t("features3CP");

  return (
    <>
      <WideBlock
        years="2021 - "
        name={nameIknow}
        city="Otwock"
        title={titleIknow}
        title2=""
        features1={features1Iknow}
        features2={features2Iknow}
        features3={features3Iknow}
        image={iknow}
        imageAlt="logo i.know"
      />
      <WideBlock
        years="2018 - 2020"
        name="TCC Telecomunication Customer Care"
        city="Warszawa"
        title={titleCP}
        title2=""
        features1={features1CP}
        features2={features2CP}
        features3={features3CP}
        image={cyfrowypolsat}
        imageAlt="logo cyfrowy polsat"
      />
    </>
  );
}
