import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
});

export function getLandClasses() {
  return axiosClient
    .get("/land_use_and_cover_classes")
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return "No Data";
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export function queryLandPrediction({ indicator, value }) {
  return axiosClient
    .post("/predict_land_management", {
      indicator,
      value,
    })
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return "No Data";
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export function queryChemAttributesPredictions(chem_attributes) {
  return axiosClient
    .post("/chem_attributes_for_predictions", chem_attributes)
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return "No Data";
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export function queryLandUseCoverPredictions(selectedUseClass, selectedCoverClass) {
  let jsonBody = {
    "LU1_Desc": [selectedUseClass],
    "LC0_Desc": [selectedCoverClass]
  }
  return axiosClient
    .post("/land_use_and_cover_for_predictions", jsonBody)
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return "No Data";
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
