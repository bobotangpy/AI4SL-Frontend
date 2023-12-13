import React, { useState } from "react";
import { queryChemAttributesPredictions } from "../../services/axios";
import valueUnits from "../../data/value_units.json";

export default function SoilChemValuesInput({
  setPrediction,
  setChemAttributeInputs,
}) {
  const [formData, setFormData] = useState({
    pH_H2O: "",
    EC: "",
    OC: "",
    CaCO3: "",
    P: "",
    N: "",
    K: "",
  });

  const validationRanges = {
    pH_H2O: { min: 1, max: 12 },
    EC: { min: 0, max: 1300 },
    OC: { min: 0, max: 500 },
    CaCO3: { min: 0, max: 750 },
    P: { min: 0, max: 550 },
    N: { min: 0, max: 50 },
    K: { min: 0, max: 1000 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Use parseFloat to convert the input value to a number
    const numericValue = parseFloat(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: isNaN(numericValue) ? "" : numericValue, // Set empty string if the value is not a valid number
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validateInputs(formData)) {
      // Handle validation error (e.g., display an error message)
      console.error("Invalid inputs");
      return;
    }
    setChemAttributeInputs(formData);
    queryChemAttributesPredictions(formData)
      .then((response) => {
        console.log(response);
        setPrediction(response);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };

  const validateInputs = (formData) => {
    // Check if any input is empty or outside the specified range
    for (const key in formData) {
      const value = parseFloat(formData[key]);
      if (formData[key] === "" || isNaN(value) || !isWithinRange(value, key)) {
        return false;
      }
    }
    return true;
  };

  const isWithinRange = (value, key) => {
    const { min, max } = validationRanges[key];
    return value >= min && value <= max;
  };

  return (
    <form className="attrGroup" onSubmit={handleSubmit}>
      {Object.keys(validationRanges).map((key) => (
        <label key={key}>
          {key}:
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
          <span>
            ({validationRanges[key]["min"]}-{validationRanges[key]["max"]}{" "}
            {valueUnits[key]})
          </span>
        </label>
      ))}
      <button type="submit" className="button">
        Predict
      </button>
    </form>
  );
}
