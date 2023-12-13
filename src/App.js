import React from "react";
import "./styles/App.scss";
import Tableau from "./components/Tableau";
import LandPrediction from "./components/land/LandPrediction";
import AttributesPrediction from "./components/attributes/AttributesPrediction";

function App() {
  return (
    <div className="App">
      <div className="row home_header">
        <img
          src="https://wax-butterfly-46f.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc0d8a943-6d63-4799-9dc3-5128375158ca%2F77132244-2bc1-4b0c-aeb4-403727f10955%2FAI_for_Life_Sciences_icon_logo.png?table=block&id=b8dd7d8e-2c9e-4d94-a111-086043d1bc9d&spaceId=c0d8a943-6d63-4799-9dc3-5128375158ca&width=250&userId=&cache=v2"
          alt="logo"
        />
        <h1 style={{ width: "fit-content" }}>AI for Life Science</h1>
      </div>
      <div className="row">
        <Tableau />
      </div>

      <div className="row">
        <LandPrediction />
        <AttributesPrediction />
      </div>

    </div>
  );
}

export default App;
