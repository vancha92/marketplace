import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { MobileMenuProvider } from "./context/MobileMenuContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LangContextProvider } from "./context/LanguageContext.tsx";

// if (!localStorage.getItem("react")) {
//   switch (navigator.language) {
//     case "gr-GR":
//       console.log("yes");
//       break;

//     case "de-DE":
//       console.log("de");
//       break;

//     case "en-US":
//       localStorage.setItem("react", "1");
//       break;

//     default:
//       console.log("deafault");

//       break;
//   }
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangContextProvider>
      <MobileMenuProvider>
        <Router>
          <App />
        </Router>
      </MobileMenuProvider>
    </LangContextProvider>
  </React.StrictMode>
);
