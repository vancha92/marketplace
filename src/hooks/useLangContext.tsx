import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const useLangContext = () => {
  const lang = useContext(LanguageContext);

  if (lang === undefined) {
    throw new Error("useContext() must be useed inside a provider");
  }

  return lang;
};
