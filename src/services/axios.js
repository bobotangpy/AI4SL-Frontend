import axios from "axios";

const axiosClient = axios.create({
  baseURL: "",
});

export function getLandPrediction({ indicator, value }) {
  return axiosClient
    .post("/predict_land_management", {
      indicator,
      value,
    })
    .then((res) => res.data);
}
