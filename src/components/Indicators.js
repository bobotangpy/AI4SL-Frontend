import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      border: "none",
      boxShadow: "none",
      margin: 0,
      borderRadius: 0,
      color: "#fff",
      backgroundColor: "var(--sidebar-color)",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled ? "inherit" : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};

const options = [
  { value: "ph", label: "pH" },
  { value: "ec", label: "EC" },
  { value: "oc", label: "OC" },
  { value: "p", label: "P" },
  { value: "n", label: "N" },
  { value: "k", label: "K" },
];

export default function Indicators({
  indicator,
  handleSelectIndicator,
  showIndicatorWarning,
}) {
  return (
    <>
      <Select
        className="input-transparent"
        placeholder="Select Indicator"
        options={options}
        styles={colourStyles}
        onChange={(e) => handleSelectIndicator(e.value)}
        value={options.find(function (option) {
          return option.value === indicator;
        })}
      />
      <p
        className="warning"
        style={{ display: showIndicatorWarning ? "block" : "none" }}
      >
        Please select a chemical indicator.
      </p>
    </>
  );
}
