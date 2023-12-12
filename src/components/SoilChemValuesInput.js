import React, { useState } from 'react';
import { postChemAttributes4Predictions } from '../services/axios';

const SoilChemValuesInput = ({ setPrediction }) => {
  const [formData, setFormData] = useState({
    pH_H2O: '',
    EC: '',
    OC: '',
    CaCO3: '',
    P: '',
    N: '',
    K: '',
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
      [name]: isNaN(numericValue) ? '' : numericValue, // Set empty string if the value is not a valid number
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validateInputs(formData)) {
      // Handle validation error (e.g., display an error message)
      console.error('Invalid inputs');
      return;
    }
    postChemAttributes4Predictions(formData)
      .then((response) => {
        console.log(response)
        setPrediction(response)
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
      if (formData[key] === '' || isNaN(value) || !isWithinRange(value, key)) {
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
    <form onSubmit={handleSubmit}>
      <label>
        pH_H2O:
        <input
          type="text"
          name="pH_H2O"
          value={formData.pH_H2O}  // Update value prop to reflect current state
          onChange={handleChange}
        />
      </label>
      <label>
        EC:
        <input
          type="text"
          name="EC"
          value={formData.EC}
          onChange={handleChange}
        />
      </label>
      <label>
        OC:
        <input
          type="text"
          name="OC"
          value={formData.OC}
          onChange={handleChange}
        />
      </label>
      <label>
        CaCO3:
        <input
          type="text"
          name="CaCO3"
          value={formData.CaCO3}
          onChange={handleChange}
        />
      </label>
      <label>
        P:
        <input
          type="text"
          name="P"
          value={formData.P}
          onChange={handleChange}
        />
      </label>
      <label>
        N:
        <input
          type="text"
          name="N"
          value={formData.N}
          onChange={handleChange}
        />
      </label>
      <label>
        K:
        <input
          type="text"
          name="K"
          value={formData.K}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SoilChemValuesInput;
