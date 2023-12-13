import "../styles/widget.scss";
import Chart from "react-apexcharts";

export default function Widget({ predictionMethod, data }) {
  // let predictions = data["data"];

  const donutSettings = {
    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val
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

  return (
    <div className="col-12">
      <div className="widget">
        <div className="border-0">
          <h6 className="header">Prediction</h6>
          <div className="d-flex justify-content-between mb-lg body">
            <p>{JSON.stringify(data)}</p>

            {/* Chart Documentation: https://apexcharts.com/docs/chart-types/pie-donut/ */}
            {predictionMethod === "landUse" && (
              <div className="mixed-chart">
                <Chart
                  options={donutSettings.options}
                  series={donutSettings.series}
                  type="donut"
                  width="500"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="widget-background"></div>
    </div>
  );
}
