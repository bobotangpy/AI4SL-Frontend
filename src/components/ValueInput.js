import { Button, Input, InputGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ValueInput({
  handleIndicatorValueChange,
  showValueWarning,
  handleSubmit,
}) {
  return (
    <div className="col-8 col-lg-6 col-xl-4">
      <InputGroup>
        <Input
          className="input-transparent dark"
          placeholder="Input value"
          onChange={(e) => handleIndicatorValueChange(e)}
        />
        <Button
          style={{ color: "rgba(244,244,245,.6)" }}
          onClick={() => handleSubmit()}
        >
          Predict
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
        </Button>
      </InputGroup>
      <p
        className="warning"
        style={{ display: showValueWarning ? "block" : "none" }}
      >
        Please input a valid number.
      </p>
    </div>
  );
}