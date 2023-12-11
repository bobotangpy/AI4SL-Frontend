import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Widget from "./Widget";
import Indicators from "./Indicators";
import ValueInput from "./ValueInput";
import { getLandPrediction } from "../services/axios";

export default function Prediction() {
  const [indicator, setIndicator] = useState();
  const [indicatorValue, setIndicatorValue] = useState();
  const [prediction, setPrediction] = useState();
  const [showIndicatorWarning, setShowIndicatorWarning] = useState();
  const [showValueWarning, setShowValueWarning] = useState(false);

  useEffect(() => {
    if (indicator) {
      console.log(indicator);
    }
  }, [indicator]);

  const predictionQuery = useQuery({
    queryKey: ["prediction", indicator, indicatorValue],
    queryFn: () => getLandPrediction(indicator, indicatorValue),
    enabled: false,
  });

  if (predictionQuery.status === "loading") return <p>Loading...</p>;
  if (predictionQuery.status === "error") {
    return <p>{JSON.stringify(predictionQuery.error)}</p>;
  }

  const handleSelectIndicator = (value) => {
    setIndicator(value);
    setShowIndicatorWarning(false);
    console.log(value);
  };

  const handleIndicatorValueChange = (e) => {
    let reg = /^\d+$/;
    if (reg.test(e.target.value)) {
      setIndicatorValue(e.target.value);
      setShowValueWarning(false);
    } else {
      setShowValueWarning(true);
    }
  };

  const handleSubmit = () => {
    if (indicator && indicatorValue) {
      console.log(indicator, indicatorValue);
      return;
    } else {
      setShowIndicatorWarning(true);
    }

    if (indicator && indicatorValue)
      predictionQuery.refetch(indicator, indicatorValue);
  };

  return (
    <div className="row data-row">
      <div className="col-2 col-lg-4 col-xl-4">
        <Indicators
          indicator={indicator}
          handleSelectIndicator={handleSelectIndicator}
          showIndicatorWarning={showIndicatorWarning}
        />
      </div>
      <div className="col-lg-8">
        <div className="row">
          <ValueInput
            handleIndicatorValueChange={handleIndicatorValueChange}
            handleSubmit={handleSubmit}
            showValueWarning={showValueWarning}
          />
          <Widget data={prediction} />
          <Widget data={prediction} />
        </div>
      </div>
    </div>
  );
}
