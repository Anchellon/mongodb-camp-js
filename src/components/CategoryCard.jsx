import Card from "react-bootstrap/Card";
import ServicesList from "./ServicesList";

import PropTypes from "prop-types";
CategoryCard.propTypes = {
  name: PropTypes.string,
  services: PropTypes.array,
};

function CategoryCard({ name, services }) {
  // console.log(services);
  return (
    <Card style={{ width: "16rem", height: "11rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <ServicesList services={services}></ServicesList>
      </Card.Body>
    </Card>
  );
}
export default CategoryCard;
