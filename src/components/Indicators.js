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

export default function Indicators({
  title,
  classes,
  selectedClass,
  handleSelectClass,
  showWarning,
}) {
  const options = classes.map((item) => ({
    value: item,
    label: item,
  }));

  return (
    <>
      <Select
        className="input-transparent"
        placeholder={`Select ${title}`}
        options={options}
        styles={colourStyles}
        onChange={(e) => handleSelectClass(e.value)}
        value={options.find((option) => {
          return option.value === selectedClass;
        })}
      />
      <p
        className="warning"
        style={{ display: showWarning ? "block" : "none" }}
      >
        Please select a class.
      </p>
    </>
  );
}
