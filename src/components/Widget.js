import "../styles/widget.scss";

export default function Widget(data) {
  return (
    <div className="col-8 col-lg-6 col-xl-4">
      <div className="widget">
        <div className="border-0">
          <div>
            <h6 className="header">Prediction</h6>
            <div className="d-flex justify-content-between mb-lg body">
              <p>Data</p>
              <p>Data</p>
              <p>Data</p>
              <p>Data</p>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-background"></div>
    </div>
  );
}
