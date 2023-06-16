import { WideBlock } from "../../components";
import lo from "../../assets/img/lo.jpg";
import sggw from "../../assets/img/sggw.jpg";
import spsobienie from "../../assets/img/sobienie.jpg";
import { useTranslation } from "react-i18next";

export function EducationPage() {
  const { t } = useTranslation();

  //tlumaczenia strony
  const nameSGGW = t("nameSGGW");
  const citySGGW = t("citySGGW");
  const titleSGGW = t("titleSGGW");
  const title2SGGW = t("title2SGGW");
  const features2SGGW = t("features2SGGW");
  const features3SGGW = t("features3SGGW");
  const nameLO = t("nameLO");
  const titleLO = t("titleLO");
  const features1LO = t("features1LO");
  const features2LO = t("features2LO");
  const nameSP = t("nameSP");
  const featuresSP = t("featuresSP");

  return (
    <>
      <WideBlock
        years="2020 - 2024"
        name={nameSGGW}
        city={citySGGW}
        title={titleSGGW}
        title2={title2SGGW}
        features1=""
        features2={features2SGGW}
        features3={features3SGGW}
        image={sggw}
        imageAlt="budynek SGGW"
      />
      <WideBlock
        years="2015 - 2018"
        name={nameLO}
        city="Otwock"
        title={titleLO}
        title2=""
        features1={features1LO}
        features2={features2LO}
        features3=" "
        image={lo}
        imageAlt="budynek liceum"
      />
      <WideBlock
        years="2005 - 2015"
        name={nameSP}
        city="Sobienie-Jeziory"
        title=" "
        title2=""
        features1={featuresSP}
        features2=" "
        features3=" "
        image={spsobienie}
        imageAlt="budynek szkoły w Sobieniach-Jeziorach"
      />
    </>
  );
}
