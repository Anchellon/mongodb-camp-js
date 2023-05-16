import ServiceLink from "./ServiceLink";
// PASSING ARRAYS IN REACT USING TYPE SCRIPT
import PropTypes from "prop-types";
ServicesList.propTypes = {
  services: PropTypes.array,
};
function ServicesList(props) {
  const { services } = props;
  return (
    <ul>
      {services.map(function (svc, i) {
        return <ServiceLink {...svc} key={i} />;
      })}
    </ul>
  );
}

export default ServicesList;
