import Header from "./component/header/Header.js";
import Main from "./component/main/Main.js";
import Footer from "./component/footer/Footer.js";
import { useState, createContext } from "react";
import "./App.css";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header moder={theme} changer={toggleTheme} />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
