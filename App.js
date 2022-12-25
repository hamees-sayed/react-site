import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
   const [darkMode, setDarkMode] = React.useState("dark");
   function toggleDarkMode() {
      setDarkMode((prevMode) => {
         if (prevMode === "dark") {
            return "";
         } else {
            return "dark";
         }
      });
   }

   return (
      <div className="container">
         <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
         <Main darkMode={darkMode} />
      </div>
   );
}
