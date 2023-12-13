import "../../styles/widget.scss";
import BulletChart from "../charts/BulletChart";
import standardRanges from "../../data/standard_ranges.json";
import valueRanges from "../../data/value_ranges.json";
import valueUnits from "../../data/value_units.json";
import ModelInfo from "../ModelInfo";
import Widget from "../Widget";

export default function AttributesPredictionResult({ prediction, input }) {
  let predictionIsManaged = prediction?.is_managed;
  let predictionErosionProb = prediction?.erosion_probability;
  let predictionResultTexture = prediction?.phy_attributes_texture?.result;
  let predictionResultBulk = prediction?.phy_attributes_bulk_density?.result;

  let ManagementPredictionContent = () => {
    return (
      <>
        Land is{" "}
        {predictionIsManaged?.result?.prediction ? "managed " : "not managed "}
        <br />
        (Probability:{" "}
        {(predictionIsManaged?.result?.probability * 100).toFixed(0)}%)
      </>
    );
  };

  const renderTexturePredictions = (category) => {
    return Object.keys(predictionResultTexture).map((attribute) => {
      const attributeData = predictionResultTexture[attribute];
      // console.log(attributeData);
      if (
        attributeData?.info?.category == category &&
        !attributeData.hasOwnProperty("out_of_standard")
      ) {
        const { value, info } = attributeData;
        return (
          <div className="col-6 attributes" key={attribute}>
            {info.full ? <div>{info.full}</div> : <div>{attribute}</div>}
            <p>{value}</p>
          </div>
        );
      }
    });
  };

  const renderBulkPredictions = (category) => {
    return Object.keys(predictionResultBulk).map((attribute) => {
      const attributeData = predictionResultBulk[attribute];
      // console.log(attributeData);
      if (
        attributeData?.info?.category == category &&
        !attributeData.hasOwnProperty("out_of_standard")
      ) {
        const { value, info } = attributeData;
        return (
          <div
            className="col-8 attributes"
            key={attribute}
            style={{ flexDirection: "column" }}
          >
            {info.full ? <div>{info.full}</div> : <div>{attribute}</div>}
            <p>{value}</p>
          </div>
        );
      }
    });
  };

  const renderChemInputsCharts = () => {
    return Object.keys(input).map((attribute) => {
      const attributeValue = input[attribute];
      if (standardRanges.hasOwnProperty(attribute)) {
        return (
          <div style={{ textAlign: "center" }}>
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
        );
      }
    });
  };

  return (
    <>
      <div className="row">
        <Widget
          title={"Prediction of Human Management"}
          content={<ManagementPredictionContent />}
          size="half"
        />

        <Widget
          title={"Erosion Probability Prediction"}
          content={`${predictionErosionProb?.result?.probability * 100}%`}
          size="half"
        />
      </div>

      <Widget
        title={"Physical Soil Attributes Prediction"}
        content={
          (renderTexturePredictions("physical"),
          renderBulkPredictions("physical"))
        }
      />

      <Widget
        title={"Chemical Soil Attributes Input"}
        content={renderChemInputsCharts()}
        styleSetting="noWrap"
      />

      <ModelInfo
        modelType={"Management Prediction"}
        modelInfo={"Support Vector Classification (SVC) model"}
        modelAccuracy={predictionIsManaged?.model_accuracy}
      />
      <ModelInfo
        modelType={"Erosion Prediction"}
        modelInfo={"Support Vector Classification (SVC) model"}
        modelAccuracy={predictionErosionProb?.model_accuracy}
      />
      <ModelInfo
        modelType={"Bulk Density Prediction"}
        modelInfo={"Support Vector Regression (SVR) model"}
        modelAccuracies={
          prediction?.phy_attributes_bulk_density?.model_accuracy
        }
      />
      <ModelInfo
        modelType={"Texture Prediction"}
        modelInfo={"Support Vector Regression (SVR) model"}
        modelAccuracies={prediction?.phy_attributes_texture?.model_accuracy}
      />
    </>
  );
}
