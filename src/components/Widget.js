import { Card, CardBody } from "reactstrap";
import "../styles/widget.scss";

export default function Widget(data) {
  return (
    <div className="col-8 col-lg-6 col-xl-4">
      <div className="widget">
        <Card className="border-0">
          <CardBody>
            <h6 className="header">Widget</h6>
            <div className="d-flex justify-content-between mb-lg body">
              <p>Data</p>
              <p>Data</p>
              <p>Data</p>
              <p>Data</p>
            </div>
          </CardBody>
        </Card>
        <div className="widget-background"></div>
      </div>
    </div>
  );
}
