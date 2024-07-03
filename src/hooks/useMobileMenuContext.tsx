import { useContext } from "react";
import { MobileMenuContext } from "../context/MobileMenuContext";

export const useMobileMenuContext = () => {
  const modalState = useContext(MobileMenuContext);

  if (modalState === undefined) {
    throw new Error("useContext() must be useed inside a provider");
  }

  return modalState;
};
