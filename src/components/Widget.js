import "../styles/widget.scss";
import Chart from "react-apexcharts";
import RadarChart from 'react-svg-radar-chart';
// import RadarChart from "./RadarChart";
// import { Radar } from 'react-chartjs-2';
import BulletChart from "./BulletChart";
import standardRanges from "../data/standard_ranges.json"
import valueRanges from "../data/value_ranges.json"


// TODO:


const LandUsePrediction = ({ data }) => {
  const donutSettings = {
    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
      },
      stroke: {
        show: false,
      },
    },
    // series: Object.keys(data).map((label) => data[label].value),
    // labels: Object.keys(data),

    // Demo
    series: [44, 55, 41, 17, 15],
    labels: ["pH_H2O", "EC", "OC", "CaCO3", "P", "N", "K"],
  };

  /* Chart Documentation: https://apexcharts.com/docs/chart-types/pie-donut/ */
  return (
    <div className="mixed-chart">
      <Chart
        options={donutSettings.options}
        series={donutSettings.series}
        type="donut"
        width="500"
      />
    </div>
  );
};





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
    return Object.keys(data).map((attribute) => {
      const attributeData = data[attribute];
      if (attributeData?.info?.category == category && attributeData.hasOwnProperty("out_of_standard")) {
        const { info, value, out_of_standard } = attributeData;
        const standardRange = standardRanges[attribute]
        const valueRange = valueRanges[attribute]

        return (
          <div style={{ textAlign: 'center' }}>
            <div>{attribute}</div>
            <BulletChart
              key={attribute}
              attribute={attribute}
              value={value}
              standardRange={standardRange}
              valueRange={valueRange}
              />
              <div>{value.toFixed(2)}</div>
              <div>{info.unit}</div>
          </div>
        );
      }
      return null; 
    });
  };

  return (
    <div className="col-12">
      <div className="widget">
        <div className="border-0">
          <h6 className="header">Predictions</h6>
          <div className="d-flex justify-content-between mb-lg body">
            {/* <p>{JSON.stringify(data)}</p> */}

            {/* {predictionMethod === "landClasses" && (
              <LandClassesPrediction data={data} />
            )} */}

          </div>
          
          <div>
            <div>Chemical Attributes</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {renderPredictionsWithStandard("chemical")}
            </div>
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
