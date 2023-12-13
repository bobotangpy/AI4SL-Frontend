import "../styles/widget.scss";
import Chart from "react-apexcharts";
import RadarChart from 'react-svg-radar-chart';
// import RadarChart from "./RadarChart";
// import { Radar } from 'react-chartjs-2';
import BulletChart from "./BulletChart";
import standardRanges from "../data/standard_ranges.json"
import valueRanges from "../data/value_ranges.json"
import BulletChartList from "./BulletChartList";




export default function Widget({ predictionMethod, data }) {
  const renderPredictions = (category) => {
    return Object.keys(data).map((attribute) => {
      const attributeData = data[attribute];
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
    const renderPredictionsWithStandard = (category) => {
      return (
        <BulletChartList category={category} data={data} standardRanges={standardRanges} valueRanges={valueRanges} />
      )
    }

  return (
    <div className="col-12">
      <div className="widget">
        <div className="border-0">
          <h6 className="header">Predictions</h6>
          <div>
            <div>Chemical Attributes</div>
              {renderPredictionsWithStandard("chemical")}
            <div>
              {renderPredictions("chemical")}
            </div>
          </div>
          <div style={{ paddingTop: 20}}>
            <div>Physical Attributes</div>
            {renderPredictions("physical")}
          </div>


        </div>
      </div>
      <div className="widget-background"></div>
    </div>
  );
}
