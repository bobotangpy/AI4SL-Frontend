import axios from "axios";

const axiosClient = axios.create({
  baseURL: "",
});

export function getLandPrediction({ indicators }) {
  return axiosClient
    .post("/predict_land_management", {
      indicators,
    })
    .then((res) => res.data);
}
