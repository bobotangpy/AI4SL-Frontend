// SoilChemInput.js
import React, { useState } from "react";

const SoilChemInput = () => {
  const [attributes, setAttributes] = useState({
    pH_H2O: { value: 6.25, minValue: 1, maxValue: 12 },
    EC: { value: 18, minValue: 0, maxValue: 500 },
    OC: { value: 50, minValue: 0, maxValue: 750 },
    CaCO3: { value: 100, minValue: 0, maxValue: 750 },
    P: { value: 35, minValue: 0, maxValue: 550 },
    N: { value: 3, minValue: 0, maxValue: 50 },
    K: { value: 200, minValue: 0, maxValue: 1000 },
  });

  const handleInputChange = (key, newValue) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [key]: { ...prevAttributes[key], value: newValue },
    }));

    // Call the external onChange callback
    // onChange(key, newValue);
  };

  return (
    <div className="soil-chem-input">
      {Object.entries(attributes).map(
        ([label, { value, minValue, maxValue }]) => (
          <div key={label} className="range-input">
            <label htmlFor={label}>{label}</label>
            <input
              type="range"
              id={label}
              min={minValue}
              max={maxValue}
              step={0.1} // Adjust the step value as needed
              value={value}
              onChange={(e) =>
                handleInputChange(label, parseFloat(e.target.value))
              }
            />
            <span>{value}</span>
          </div>
        )
      )}
    </div>
  );
};

export default SoilChemInput;
