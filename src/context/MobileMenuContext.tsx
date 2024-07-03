import { createContext, useReducer } from "react";

type contextType = {
  state?: boolean;
  changeModalState?: (state: boolean) => void;
};

export const MobileMenuContext = createContext<contextType>({});

const reducer = (
  currentState: any,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "CHANGE_STATE": {
      return {
        ...currentState,
        modalState: action.payload,
      };
    }
  }
};

export function MobileMenuProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, { modalState: false });

  const changeModalState = (param: boolean) => {
    dispatch({ type: "CHANGE_STATE", payload: param });
  };

  return (
    <MobileMenuContext.Provider
      value={{ state: state.modalState, changeModalState: changeModalState }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}
