import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseReducerTest from "./sample/UseReducerTest";
import UseReducerTest2 from "./sample/UseReducerTest2";
import CounterSample1 from "./sample/CounterSample1";
import { ThemeContext } from "../contexts/ThemeContext";
import "./App.css";
import OneStep from "./sample/OneStep";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const App = () => (
  <div className="App">
    <ThemeContext.Provider value={themes.light}>
      <OneStep userName="gdh" />
      <BrowserRouter>
        <Routes>
          <Route path="/counterSample" element={<CounterSample1 />}></Route>
          <Route path="/counterSample" element={<CounterSample1 />}></Route>
          <Route
            path="/counterSample2"
            element={<CounterSample1 initialCount={10} />}
          ></Route>
          <Route path="/useReducerTest" element={<UseReducerTest />}></Route>
          <Route
            path="/useReducerTest2"
            element={<UseReducerTest2 initialCount={9} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  </div>
);

export default App;
