import "../../styles/widget.scss";
import standardRanges from "../../data/standard_ranges.json";
import valueRanges from "../../data/value_ranges.json";
import BulletChartList from "../charts/BulletChartList";
import Widget from "../Widget";
import ModelInfo from "../ModelInfo";

export default function LandPredictionResult({
  prediction,
  modelInfo,
  modelAccuracies,
}) {
  const renderPredictions = (category) => {
    return Object.keys(prediction).map((attribute) => {
      const attributeData = prediction[attribute];
      if (
        attributeData?.info?.category === category &&
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

  const renderPredictionsWithStandard = (category) => {
    return (
      <BulletChartList
        category={category}
        data={prediction}
        standardRanges={standardRanges}
        valueRanges={valueRanges}
      />
    );
  };

  return (
    <>
      <Widget
        title={"Chemical Attributes Predictions"}
        content={renderPredictionsWithStandard("chemical")}
      />
      <Widget
        title={"Physical Attributes Predictions"}
        content={renderPredictions("physical")}
      />
      <Widget
        title={"Model Information"}
        content={renderPredictions("physical")}
      />

      <ModelInfo modelInfo={modelInfo} modelAccuracies={modelAccuracies} />
    </>
  );
}
