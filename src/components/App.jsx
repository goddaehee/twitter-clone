import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseReducerTest from "./sample/UseReducerTest";
import UseReducerTest2 from "./sample/UseReducerTest2";
import CounterSample1 from "./sample/CounterSample1";
import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
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
  </div>
);

export default App;
