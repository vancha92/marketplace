import { createContext, useReducer } from "react";

type contextType = {
  lang: string;
  changeLang?: (lang: string) => void;
};

export const LanguageContext = createContext<contextType>({ lang: "" });

const reducer = (
  currentLang: any,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "CHANGE_STATE": {
      return action.payload || currentLang;
    }
  }
};

export function LangContextProvider({ children }: any) {
  const [lang, dispatch] = useReducer(
    reducer,
    localStorage.getItem("selectedLang") || "gr-GR"
  );

  localStorage.setItem("selectedLang", lang!);

  const changeLang = (lang: string) => {
    dispatch({ type: "CHANGE_STATE", payload: lang });
  };

  return (
    <LanguageContext.Provider value={{ lang: lang!, changeLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
