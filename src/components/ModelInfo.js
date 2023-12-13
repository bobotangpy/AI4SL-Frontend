import React from "react";
import "../styles/widget.scss";

const ModelInfo = ({
  modelType,
  modelInfo,
  modelAccuracies,
  modelAccuracy,
}) => {
  return (
    <div className="col-12">
      <div className="widget">
        <div className="border-0">
          <h6 className="header" style={{ paddingBottom: "10px" }}>
            {modelType ? modelType : ""} Model Information
          </h6>
          <div className="body content" style={{ paddingLeft: "25px" }}>
            {modelInfo}
          </div>

          <h6 className="header" style={{ paddingBottom: "10px" }}>
            Model Accuracy
          </h6>
          <div className="body content">
            {modelAccuracies && (
              <ul>
                {Object.entries(modelAccuracies).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong>{" "}
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <span key={subKey}>
                        {subKey}: {subValue}{" "}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            )}
            {modelAccuracy && (
              <ul>
                {Object.entries(modelAccuracy).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="widget-background"></div>
    </div>
  );
};

export default ModelInfo;
