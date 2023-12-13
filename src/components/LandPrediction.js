import { useEffect, useState } from "react";
import Widget from "./Widget";
import Indicators from "./Indicators";
import {
  getLandClasses,
  queryLandPrediction,
  queryLandUseCoverPredictions,
} from "../services/axios";

export default function LandPrediction() {
  const [coverClasses, setCoverClasses] = useState();
  const [useClasses, setUseClasses] = useState();
  const [prediction, setPrediction] = useState();
  const [selectedCoverClass, setSelectedCoverClass] = useState();
  const [selectedUseClass, setSelectedUseClass] = useState();
  const [showUseClassWarning, setShowUseClassWarning] = useState(false);
  const [showCoverClassWarning, setShowCoverClassWarning] = useState(false);

  useEffect(() => {
    // TODO: need to test & fetch the data, on my machine is error
    getLandClasses()
      .then((res) => {
        if (res !== "No Data") {
          setCoverClasses(res.land_cover_classes);
          setUseClasses(res.land_use_classes);
        } else {
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectUseClass = (value) => {
    setSelectedUseClass(value);
    setShowUseClassWarning(false);
    console.log(value);
  };

  const handleSelectCoverClass = (value) => {
    setSelectedCoverClass(value);
    setShowCoverClassWarning(false);
    console.log(value);
  };

  const handleSubmit = () => {
    if (selectedUseClass && selectedCoverClass) {
      // TODO: need to try call api & get correct values
      queryLandUseCoverPredictions(selectedUseClass, selectedCoverClass)
        .then((res) => {
          if (res !== "No Data") {
            setPrediction(res.all_attributes.result);
          } else {
            return res;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    } else {
      setShowUseClassWarning(true);
      setShowCoverClassWarning(true);
    }

    // if (indicator && indicatorValue)
    //   predictionQuery.refetch(indicator, indicatorValue);
  };

  return (
    <div className="col-s-12 col-lg-6 col-xl-6 data-row">
      <div className="widget big-card">
        <h5>Prediction Method 1 - Land Use & Land Cover</h5>

        <div style={{ margin: "50px 0 50px 0" }}>
          <p className="label">Land Use</p>
          {useClasses ? (
            <Indicators
              title="Land Use"
              classes={useClasses}
              selectedClass={selectedUseClass}
              handleSelectClass={handleSelectUseClass}
              showWarning={showUseClassWarning}
            />
          ) : (
            <p>Loading ...</p>
          )}

          <p className="label">Land Cover</p>
          {coverClasses ? (
            <Indicators
              title="Land Cover"
              classes={coverClasses}
              selectedClass={selectedCoverClass}
              handleSelectClass={handleSelectCoverClass}
              showWarning={showCoverClassWarning}
            />
          ) : (
            <p>Loading ...</p>
          )}

          <button type="submit" className="button" onClick={handleSubmit}>
            Predict
          </button>
        </div>

        {prediction && <Widget predictionMethod="landClasses" data={prediction} />}
      </div>
    </div>
  );
}
