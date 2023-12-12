import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
});

export function getLandPrediction({ indicator, value }) {
  return axiosClient
    .post("/predict_land_management", {
      indicator,
      value,
    })
    .then((res) => res.data);
}

export function postChemAttributes4Predictions(chem_attributes) {
  return axiosClient
    .post("/chem_attributes_for_predictions", chem_attributes)
    .then((res) => res.data);
}
