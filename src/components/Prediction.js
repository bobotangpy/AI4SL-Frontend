import { useState } from "react";
import { useQuery } from "react-query";
import Widget from "./Widget";
import Indicators from "./Indicators";
import ValueInput from "./ValueInput";
import { getLandPrediction } from "../services/axios";

export default function Prediction() {
  const [indicators, setIndicators] = useState();
  const [prediction, setPrediction] = useState();

  const predictionQuery = useQuery({
    queryKey: ["prediction", indicators],
    queryFn: () => getLandPrediction(indicators),
    enabled: false,
  });

  if (predictionQuery.status === "loading") return <p>Loading...</p>;
  if (predictionQuery.status === "error") {
    return <p>{JSON.stringify(predictionQuery.error)}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (indicators) predictionQuery.refetch(indicators);
  };

  return (
    <div className="row data-row">
      <div className="col-2 col-lg-4 col-xl-4">
        <Indicators />
      </div>
      <div className="col-lg-8">
        <div className="row">
          <ValueInput handleSubmit={handleSubmit} />
          <Widget data={prediction} />
          <Widget data={prediction} />
        </div>
      </div>
    </div>
  );
}
