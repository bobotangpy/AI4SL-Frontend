import React from 'react';

const ModelInfo = ({ modelType, modelInfo, modelAccuracies, modelAccuracy }) => {
  return (
    <div>
      <h3>{modelType?modelType:""} Model Information</h3>
      <p>{modelInfo}</p>
      <h4>Model Accuracy</h4>
      {modelAccuracies && (
        <ul>
          {Object.entries(modelAccuracies).map(([key, value]) => (
            <li key={key}>
                <strong>{key}:</strong> {Object.entries(value).map(([subKey, subValue]) => (
                <span key={subKey}>
                  {subKey}: {subValue}{" "}
                </span>
              ))}</li>
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
  );
};

export default ModelInfo;
