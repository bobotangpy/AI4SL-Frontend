import { useState } from "react";
import Widget from "./Widget";
import SoilChemValuesInput from "./SoilChemValuesInput";

export default function AttributesPrediction() {
  const [prediction, setPrediction] = useState();

  return (
    <div className="col-s-12 col-lg-6 col-xl-6 data-row">
      <div className="widget big-card">
        <h5>Prediction Method 2 - Chemical Attributes</h5>

        <div style={{ margin: "50px 0 50px 0" }}>
          <SoilChemValuesInput setPrediction={setPrediction} />
        </div>

        {prediction && <Widget data={prediction} />}
      </div>
    </div>
  );
}
