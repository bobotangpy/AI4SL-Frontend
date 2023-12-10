import React from "react";
import "./styles/App.scss";
import Tableau from "./components/Tableau";
import Widget from "./components/Widget";
import Indicators from "./components/Indicators";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>AI4LS</h1>

      <div className="row data-row">
        <div className="col-2 col-lg-4 col-xl-4">
          <Indicators />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <Widget />
            <Widget />
            <Widget />
          </div>
        </div>
      </div>

      <div className="row">
        <Tableau />
      </div>
    </div>
  );
}

export default App;
