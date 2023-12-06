import { Button, Card, CardBody } from "reactstrap";

export function Widget(data) {
  return (
    <Card className="border-0">
      <CardBody>
        <button className="btn-link fw-semi-bold text-success">
          Avg Rating
        </button>
        <button className="btn-link fw-semi-bold text-muted ms-sm">
          All Time
        </button>
        <hr />
        <div className="d-flex justify-content-between mb-lg">
          <div className="text-warning">
            <i className="fa fa-star me-1" />
            <i className="fa fa-star me-1" />
            <i className="fa fa-star me-1" />
            <i className="fa fa-star me-1" />
            <i className="fa fa-star" />
          </div>
          <span className="text-muted">
            <small>342 REVIEWS</small>
          </span>
        </div>
        <div className="mb-lg">
          <h3 className="text-success mb-0">69%</h3>
          of customers recomend this product
        </div>
        <Button className="btn-rounded-f" color="success">
          Write a Review
        </Button>
      </CardBody>
    </Card>
  );
}
