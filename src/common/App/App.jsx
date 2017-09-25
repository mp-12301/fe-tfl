import React from "react";
import { Provider } from "react-redux";

import Store from "../store";

import TFL from "../containers/TFL";

import cls from "./App.css";

function App() {
  return (
    <Provider store={Store} >
      <TFL />
    </Provider>
  );
}

export default App;
