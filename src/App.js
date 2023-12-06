import "./App.css";
import Select from "react-select";
import { Widget } from "./components/Widget";

const options = [
  { value: "ph", label: "pH" },
  { value: "ec", label: "EC" },
  { value: "oc", label: "OC" },
  { value: "p", label: "P" },
  { value: "n", label: "N" },
  { value: "k", label: "K" },
];

const Indicators = () => <Select options={options} />;

function App() {
  return (
    <div className="App">
      <h1>AI4LS</h1>
      <Indicators className="input-transparent" />

      <div className="row">
        <div className="col-12 col-lg-6 col-xl-4">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default App;
