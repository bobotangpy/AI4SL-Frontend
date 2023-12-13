import "../styles/widget.scss";
import Chart from "react-apexcharts";
import RadarChart from 'react-svg-radar-chart';
// import RadarChart from "./RadarChart";
// import { Radar } from 'react-chartjs-2';
import BulletChart from "./BulletChart";
import standardRanges from "../data/standard_ranges.json"
import valueRanges from "../data/value_ranges.json"
import valueUnits from "../data/value_units.json"
import BulletChartList from "./BulletChartList";
import ModelInfo from "./ModelInfo";




export default function AttributePredictionResult({ predictionMethod, prediction, input}) {
  let predictionIsManaged = prediction?.is_managed
  let predictionErosionProb = prediction?.erosion_probability
  let predictionResultTexture = prediction?.phy_attributes_texture?.result
  let predictionResultBulk = prediction?.phy_attributes_bulk_density?.result



  const renderTexturePredictions = (category) => {
    return Object.keys(predictionResultTexture).map((attribute) => {
      const attributeData = predictionResultTexture[attribute];
      console.log(attributeData)
      if (attributeData?.info?.category == category && !attributeData.hasOwnProperty("out_of_standard")) {
        const { value, info } = attributeData
        return (
          <div style={{ display: "flex", flexDirection: "row" }} key={attribute}>
            {info.full? <div>{info.full}</div> : <div>{attribute}</div>}
            <div>{value}</div>
          </div>
        )
      }
      }
    )
  }

  const renderBulkPredictions = (category) => {
    return Object.keys(predictionResultBulk).map((attribute) => {
      const attributeData = predictionResultBulk[attribute];
      console.log(attributeData)
      if (attributeData?.info?.category == category && !attributeData.hasOwnProperty("out_of_standard")) {
        const { value, info } = attributeData
        return (
          <div style={{ display: "flex", flexDirection: "row" }} key={attribute}>
            {info.full? <div>{info.full}</div> : <div>{attribute}</div>}
            <div>{value}</div>
          </div>
        )
      }
      }
    )
  }
  

  
    const renderChemInputsCharts = () => {
      return Object.keys(input).map((attribute) => {
        const attributeValue = input[attribute]
        if (standardRanges.hasOwnProperty(attribute)) {
          return (
            <div style={{ textAlign: 'center' }}>
              <div>{attribute}</div>
                  <BulletChart
                    key={attribute}
                    attribute={attribute}
                    value={attributeValue}
                    standardRange={standardRanges[attribute]}
                    valueRange={valueRanges[attribute]}
                    />
                    <div>{attributeValue.toFixed(2)}</div>
                    <div>{valueUnits[attribute]}</div>
            </div>
          )
        }
      })
    }

  return (
    <div className="col-12">
      <div className="widget">
        <div className="border-0">
          <h6 className="header">Predictions</h6>
          <div>
            <div>Prediction of Human Management</div>
              Land is {predictionIsManaged?.result?.prediction? "managed " : "not managed "}
              (Probability: {(predictionIsManaged?.result?.probability*100).toFixed(0)}%)
          </div>
          <div style={{ paddingTop: 20}}>
            <div>Erosion Probability</div>
            {predictionErosionProb?.result?.probability*100}%
          </div>
          <div style={{ paddingTop: 20}}>
            <div>Physical Soil Attributes</div>
            {renderTexturePredictions("physical")}
            {renderBulkPredictions("physical")}
          </div>
          <div style={{ paddingTop: 20}}>
            <div>Chemical Soil Attributes Input</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
            {renderChemInputsCharts()}
            </div>
          </div>
          
          <ModelInfo modelType={"Management Prediction"} modelInfo={"Support Vector Classification (SVC) model"} modelAccuracy={predictionIsManaged?.model_accuracy} />
          <ModelInfo modelType={"Erosion Prediction"} modelInfo={"Support Vector Classification (SVC) model"} modelAccuracy={predictionErosionProb?.model_accuracy} />
          <ModelInfo modelType={"Bulk Density Prediction"} modelInfo={"Support Vector Regression (SVR) model"} modelAccuracies={ prediction?.phy_attributes_bulk_density?.model_accuracy} />
          <ModelInfo modelType={"Texture Prediction"} modelInfo={"Support Vector Regression (SVR) model"} modelAccuracies={ prediction?.phy_attributes_texture?.model_accuracy} />

        </div>
      </div>
      <div className="widget-background"></div>
    </div>
  );
}
